import React, { useEffect, useState } from "react";
import VideoGames from "./video_game/videoGames";
import '../stylesheets/homeScreen.scss';
import $ from "jquery";

const HomeScreen = (props) => {
  
  const [ randomGameArray, setRandomGameArray ] = useState([]);
  const [ singleplayerGameArray, setSingleplayerGameArray ] = useState([]);
  const [ multiplayerGameArray, setMultiplayerGameArray ] = useState([]);
  useEffect(() => {
    $.ajax({
      url: "http://127.0.0.1:5000/game/random",
      type: 'GET',
      dataType: 'json',
    }).then(data => {
      const gameID = [];
      for (const game of data) {
        gameID.push(game.id);
      }
      setRandomGameArray(gameID)
    })
    $.ajax({
      url: "http://127.0.0.1:5000/game/random",
      type: 'GET',
      data : {categories : "singleplayer"},
      dataType: 'json',
    }).then(data => {
      const gameID = [];
      for (const game of data) {
        gameID.push(game.id);
      }
      setSingleplayerGameArray(gameID);
    })
    $.ajax({
      url: "http://127.0.0.1:5000/game/random",
      type: 'GET',
      data : {categories : "multiplayer"},
      dataType: 'json',
    }).then(data => {
      const gameID = [];
      for (const game of data) {
        gameID.push(game.id);
      }
      setMultiplayerGameArray(gameID);
    })
  }, [])

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