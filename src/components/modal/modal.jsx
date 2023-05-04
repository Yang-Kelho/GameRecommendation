import React from "react";
import LoginForm from "../nav_Profile/loginForm";
import SignUpForm from "../nav_Profile/signUpForm";
import VideoGameItemPopUp from "../home_screen/video_game/videoGameItemPopUp";

const Modal = props => {
  const { modal, handlePopUp, handleAppChange, gameID } = props;

  if (!modal) return null;

  let component;

  switch (modal) {
    case "login":
      component = <LoginForm/>;
      break;
    case "signup":
      component = <SignUpForm/>;
      break;
    case "game":
      component = <VideoGameItemPopUp gameID={gameID}/>;
      break;
    default:
      return null;
  }

  return (
    <div>
      <div className="blackscreen" onClick={handlePopUp}/>
      {component}
    </div>
  )
}

export default Modal;