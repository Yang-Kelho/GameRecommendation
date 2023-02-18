import React from "react";

const VideoGameItem = dic => {
  return (
    <div className="videoGameItem">
      {dic.props.array}
    </div>
  )
}

export default VideoGameItem