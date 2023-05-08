import React from "react";
import { useState } from "react";
import '../stylesheets/modal.scss';
import $ from "jquery";
import { useNavigate } from "react-router-dom";

const LoginForm = props => {
  const handlePopUp = props.handlePopUp;
  const [ state, setState ] = useState({
    username: "",
    password: "",
    loggedIn: false
  })
  const navigate = useNavigate()

  const toSignUp = () => {
    handlePopUp();
    navigate('/signUp');
  }

  const handleChange = (field) => {
    return e => setState({
      ...state,
      [field]: e.currentTarget.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("This came from the Login Form");
    console.log(state);
    var frm = $('#1234');
    $.ajax({
      type: 'POST',
      url: "http://localhost:5000/login",
      xhrFields:{withCredentials: true},
      data: frm.serialize(),
      success: function (data) {
          console.log('Submission was successful.');
          console.log(data);
      },
      error: function (data) {
          console.log('An error occurred.');
          console.log(data);
      }
    })
  }

  return (
    <div>
      <div className="PopUpLogin">
        <header>Log In</header>
        <form id="1234">
          <input name="username" type="text" placeholder="Username" onChange={handleChange("username")}/>   
          <input name="password" type="password" placeholder="Password" onChange={handleChange("password")}/>
          <button onClick={handleSubmit}> Log in </button>
        </form>
        <div className="hyperlinks">
          <a> Reset Password </a>
          <h1> No account? <u onClick={() => {toSignUp()}}> Create one </u></h1>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;