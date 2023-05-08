import React from "react";
    import VideoGames from "./video_game/videoGames";
import '../stylesheets/homeScreen.scss';
import $ from "jquery";
import { useState } from "react";

const HomeScreen = (props) => {

  const randomGameArray = [];
  const singleplayerGameArray = [];
  const multiplayerGameArray = [];
  // const [ state ] = useState({
  //   ...state,
  //   randomGameArray: [],
  //   singleplayerGameArray: [],
  //   multiplayerGameArray: [],
  // })
  // const array = [550010, 6310, 558420, 253710, 2073470, 1515950, 466300, 1017180, 611760, 740130];
  const runOnce = () => {
    $.ajax({
      url: "http://127.0.0.1:5000/game/random",
      type: 'GET',
      dataType: 'json',
      success : (data) => {
        for (const obj of data) {
          randomGameArray.push(obj.id)
        }
        console.log(randomGameArray)
      }
    })
    $.ajax({
      url: "http://127.0.0.1:5000/game/random",
      type: 'GET',
      data : {categories : "singleplayer"},
      dataType: 'json',
      success : (data) => {
        for (const obj of data) {
          singleplayerGameArray.push(obj.id)
        }
        console.log(singleplayerGameArray)
      }
    })
    $.ajax({
      url: "http://127.0.0.1:5000/game/random",
      type: 'GET',
      data : {categories : "multiplayer"},
      dataType: 'json',
      success : (data) => {
        for (const obj of data) {
          multiplayerGameArray.push(obj.id)
        }
        console.log(multiplayerGameArray)
      }
    })
  }
  runOnce();
  return ( 
    <div className="homeScreen">
      <div className="recommendationsContainer">
        <VideoGames handleAppChange={props.handleAppChange} videoGameArray={randomGameArray}/>
      </div>
      <div className="videoGameContainer">
        <VideoGames handleAppChange={props.handleAppChange} videoGameArray={singleplayerGameArray}/>
      </div>
      <div className="videoGameContainer">
        <VideoGames handleAppChange={props.handleAppChange} videoGameArray={multiplayerGameArray}/>
      </div>
    </div>
  )
}

export default HomeScreen