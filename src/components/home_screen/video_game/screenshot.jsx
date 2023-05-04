import React from "react";
import '../../stylesheets/videoGame.scss';

const Screenshot = props => {

  const { image } = props;
  console.log(image);
  return (
    <div className="screenshot">
      {console.log(image)}
      <img src={image} alt="" />
    </div>
  )
}

export default Screenshot;