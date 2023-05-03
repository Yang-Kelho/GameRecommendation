import React from "react";
import VideoGameItem from "./videoGameItem";
import '../../stylesheets/videoGame.scss';

const VideoGame = props => {
  const {handlePopUp, handleAppChange, videoGameArray} = props;
  return (
    <div className="videoGame">
      {videoGameArray.map((num) => {
        return (
          <VideoGameItem handlePopUp={handlePopUp} handleAppChange={handleAppChange} key={num}/>
        )
      })}
    </div>
  )
}

export default VideoGame;