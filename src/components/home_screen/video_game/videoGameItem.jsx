import React from "react";
import '../../stylesheets/videoGame.scss';
import Noita from './Noita.jpg';

const VideoGameItem = props => {
  const { handlePopUp, handleAppChange } = props; 

  const handleClick = (gameID) => {
    handleAppChange("gameID", gameID)
    handleAppChange("modal", "game")
  }
  return (
    <div onClick={() => handleClick("10")}>
      <div className="videoGameItem">
        <img src={Noita}/>
      </div>
    </div>
  )
}

export default VideoGameItem 