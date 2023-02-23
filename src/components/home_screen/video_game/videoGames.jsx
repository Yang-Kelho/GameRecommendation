import React from "react";
import VideoGameItem from "./videoGameItems";
import '../../stylesheets/videoGame.css';

const VideoGame = props => {
  const {array} = props;
  return (
    <div className="videoGame">
        {array.map((num, i) => {
          return (
            <VideoGameItem key={i} props={props}/>
          )
        })}
    </div>
  )
}

export default VideoGame;