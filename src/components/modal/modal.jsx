import React from "react";
import LoginForm from "../nav_Profile/loginForm";

const Modal = props => {
  const { modal, handlePopUp, handleAppChange } = props;

  if (!modal) return null;

  let component;

  switch (modal) {
    case "login":
      component = <LoginForm handlePopUp={handlePopUp} handleAppChange={handleAppChange}/>;
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