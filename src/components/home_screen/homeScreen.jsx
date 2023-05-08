import React from "react";
import Recommendations from "./video_game/Recommendations";
import VideoGames from "./video_game/videoGames";
import '../stylesheets/homeScreen.scss';

const HomeScreen = (props) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8]
  return ( 
    <div className="homeScreen">
      <Recommendations/>
      <VideoGames handleAppChange={props.handleAppChange} videoGameArray={array}/>
    </div>
  )
}

export default HomeScreen