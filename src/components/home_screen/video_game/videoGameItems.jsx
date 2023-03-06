import React from "react";
import '../../stylesheets/videoGame.css';
import Noita from './Noita.jpg';

const VideoGameItem = dic => {
  return (
    <div className="videoGameItem">
      <img src={Noita}/>
    </div>
  )
}

export default VideoGameItem