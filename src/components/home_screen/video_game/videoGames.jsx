import React from "react";
import VideoGameItem from "./videoGameItem";
import '../../stylesheets/videoGame.scss';

const VideoGame = props => {
  const {videoGameArray} = props;
  return (
    <div className="videoGame">
      {videoGameArray.map((num) => {
        return (
          <VideoGameItem key={num} props={props}/>
        )
      })}
    </div>
  )
}

export default VideoGame;