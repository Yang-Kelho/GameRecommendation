import React from "react";
import VideoGameItem from "./videoGameItem";
import '../../stylesheets/videoGame.scss';

const VideoGames = props => {
  const {videoGameArray} = props;
  console.log(videoGameArray)
  return (
    <div className="videoGames">
      {videoGameArray.map((gameID) => {
        return (
          <VideoGameItem gameID={gameID}/>
        )
      })}
    </div>
  )
}

export default VideoGames;