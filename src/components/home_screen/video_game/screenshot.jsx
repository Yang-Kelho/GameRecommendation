import React from "react";
import '../../stylesheets/videoGame.scss';

const Screenshot = props => {
  return (
    <div className="screenshot">
      <img src={props.image} alt="" />
    </div>
  )
}

export default Screenshot;