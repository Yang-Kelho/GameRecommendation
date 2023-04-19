import React from "react";
import '../../stylesheets/videoGame.scss';
import Noita from './Noita.jpg';
import VideoGameItemDetails from "./videoGameItemDetails";

const VideoGameItem = props => {
  const handleClick = () => {
    return (<VideoGameItemDetails/>);
  }

  return (
    <div>
      <div className="videoGameItem">
        <img onClick={() => handleClick()} src={Noita}/>
      </div>
    </div>
  )
}

export default VideoGameItem