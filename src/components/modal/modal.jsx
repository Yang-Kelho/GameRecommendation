import React from "react";
import { closeModal } from "../../utils/modal_actions";
import LoginForm from "../nav_Profile/loginForm";
import SignUpForm from "../nav_Profile/signUpForm";
import VideoGameItemPopUp from "../home_screen/video_game/videoGameItemDetails";

const Modal = props => {
  const { modal, closeModal } = props;

  if (!modal) return null;

  let component;

  switch (modal.type) {
    case "login":
      component = <LoginForm/>;
      break;
    case "signup":
      component = <SignUpForm/>;
      break;
    case "game":
      component = <VideoGameItemPopUp/>;
      break;
    default:
      return null;
  }

  const reset = () => {
    closeModal();
  }

  return (
    <div className="blackscreen" onClick={reset}/>
  )
}

export default Modal;