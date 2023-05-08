import React from "react";
import VideoGameItem from "./videoGameItem";
import '../../stylesheets/videoGame.scss';

const VideoGames = props => {
  const {handleAppChange, videoGameArray} = props;
  console.log(videoGameArray)
  return (
    <div className="videoGames">
      {videoGameArray.map((gameID) => {
        return (
          <VideoGameItem handleAppChange={handleAppChange} gameID={gameID}/>
        )
      })}
    </div>
  )
}

export default VideoGames;