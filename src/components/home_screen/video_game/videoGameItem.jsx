import React from "react";
import '../../stylesheets/videoGame.scss';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import $ from "jquery";

const VideoGameItem = props => {
  const { gameID, handleAppChange } = props; 
  const [ state, setState ] = useState({
    id: "",
    name: "",
    header_image: "",
  })
  const navigate = useNavigate();
  const toGame = () => {
    handleAppChange("gameID", state.id)
  }
  
  const handleClick = () => {
    toGame();
    navigate("/app");
  }

  useEffect(() => {
    $.ajax({
      url: "http://127.0.0.1:5000/game/" + gameID,
      type: 'GET',
      dataType: 'json',
      success : (data) => {
        setState({
          ...state,
          id: data.id,
          name: data.name,
          header_image: data.header_image,
        })
      }
    })
  })
  return (
    <div onClick={() => handleClick()}>
      <div className="videoGameItem">
        <img src={state.header_image}/>
      </div>
    </div>
  )
}

export default VideoGameItem;