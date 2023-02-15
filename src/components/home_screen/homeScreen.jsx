import React from "react";
import NavBar from "./navBar";
import SearchBar from "./searchBar";
import VideoGame from "./videoGames";
import './homeScreen.css';

const HomeScreen = () => {
  return ( 
    <div className="homeScreen">
      <NavBar/>
      <div className="main">
        <SearchBar/>
        <VideoGame/>
      </div>
    </div>
  )
}

export default HomeScreen