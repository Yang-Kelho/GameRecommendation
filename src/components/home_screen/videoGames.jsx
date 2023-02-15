import React from "react";
import VideoGameItem from "./videoGameItems";

const VideoGame = () => {
  const array = [1, 2, 3, 4, 5, "Test", 1, 61, 23, 2, 2, 3, 4];
  return (
    <div className="videoGame">
        {array.map((num, i) => {
          return (
            <VideoGameItem key={i}/>
          )
        })}
    </div>
  )
}

export default VideoGame;