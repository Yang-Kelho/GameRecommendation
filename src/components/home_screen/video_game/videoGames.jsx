import React from "react";
import VideoGameItem from "./videoGameItem";
import '../../stylesheets/videoGame.scss';

const VideoGame = props => {
  const {handleAppChange, videoGameArray} = props;
  console.log(videoGameArray)
  return (
    <div className="videoGame">
      {videoGameArray.map((num) => {
        return (
          <VideoGameItem handleAppChange={handleAppChange} key={num}/>
        )
      })}
    </div>
  )
}

export default VideoGame;