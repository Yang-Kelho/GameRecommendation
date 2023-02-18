import React from "react";
import SearchBar from "./searchBar";
import VideoGame from "./video_game/videoGames";
import '../stylesheets/homeScreen.css';

const HomeScreen = () => {
  const array = [1, 2, 3, 4, 5, 6, 7]
  return ( 
    <div className="homeScreen">
      <SearchBar/>
      <VideoGame array={array}/>
    </div>
  )
}

export default HomeScreen