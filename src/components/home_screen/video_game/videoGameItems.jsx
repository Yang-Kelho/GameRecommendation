import React from "react";
import '../../stylesheets/videoGame.css';

const VideoGameItem = dic => {
  return (
    <div className="videoGameItem">
      {dic.props.array}
    </div>
  )
}

export default VideoGameItem