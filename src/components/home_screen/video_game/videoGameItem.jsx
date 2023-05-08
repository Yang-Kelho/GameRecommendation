import React from "react";
import '../../stylesheets/videoGame.scss';
import Noita from './Noita.jpg';
import { useNavigate } from "react-router-dom";

const VideoGameItem = props => {
  const { handleAppChange } = props; 

  const navigate = useNavigate();
  const toGame = (gameID) => {
    handleAppChange("gameID", gameID)
  }
  
  const handleClick = (gameID) => {
    toGame(gameID);
    navigate("/app");
  }

  return (
    <div onClick={() => handleClick("10")}>
      <div className="videoGameItem">
        <img src={Noita}/>
      </div>
    </div>
  )
}

export default VideoGameItem;