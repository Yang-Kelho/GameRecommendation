import React from "react";
import VideoGameItem from "./videoGameItem";
import '../../stylesheets/videoGame.scss';
import { useState } from "react";

const VideoGames = props => {
  const {videoGameArray} = props;
  return (
    <div className="videoGames">
      {videoGameArray.map((gameID, i) => {
        return (
          <VideoGameItem gameID={gameID} key={i}/>
        )
      })}
    </div>
  )
}

export default VideoGames;