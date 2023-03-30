import React from "react";
import '../../stylesheets/videoGame.css';
import Noita from './Noita.jpg';

const VideoGameItem = dic => {
  const handleClick = (key) => {
    console.log(key);
  }

  return (
    <div>
      <div className="videoGameItem">
        <img onClick={() => handleClick(dic.key)} src={Noita}/>
      </div>
    </div>
  )
}

export default VideoGameItem