import React from "react";
import SearchBar from "./searchBar";
import VideoGames from "./video_game/videoGames";
import '../stylesheets/homeScreen.scss';

const HomeScreen = (props) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8]
  return ( 
    <div className="homeScreen">
      <SearchBar/>
      <VideoGames handlePopUp={props.handlePopUp} handleAppChange={props.handleAppChange} videoGameArray={array}/>
    </div>
  )
}

export default HomeScreen