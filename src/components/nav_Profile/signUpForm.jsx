import React from "react";
import { useState } from "react";
import { signup } from "../../utils/Ajax";
import '../stylesheets/signUpPage.scss';
import $ from "jquery";

const SignUpForm = (props) => {

  const { handlePopUp, handleAppChange } = props; 
  const handleClick = () => {
    handlePopUp();
  }

  const [ state, setState ] = useState({
    email: "",
    username: "",
    password: "",
    re_enter_password: "",
  })
  
  const handleChange = (field) => {
    return e => setState({
      ...state,
      [field]: e.currentTarget.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("This came from the SignUpForm");
    console.log(state);
    var frm = $('#4321');
    $.ajax({
      type: 'POST',
      url: "http://localhost:5000/register",
      xhrFields:{withCredentials: true},
      data: frm.serialize(),
      success: function (data) {
          alert(data.message);
          console.log(data);
      },
      error: function (data) {
          alert(data.message);
          console.log(data);
      }
    })
  }

  return (
    <div className="SignUpPage">
      <div className="SignUpBox">
        <header>
          <span>
            {/* Logo */}
            <h1 className="first"> Create a Game Recommendation Account </h1>
            <h1 className="second"> It's quick and easy. </h1>
          </span>
        </header>

        <form id="4321">
          <span>
            <div>
              <input name="email" type="text" placeholder="Email" onChange={handleChange("email")}/>
              <input name="username" type="text" placeholder="Username" onChange={handleChange("username")}/>
            </div>
            <div>
              <input name="password" type="password" placeholder="Password" onChange={handleChange("password")}/>
              <input name="re_enter_password" type="password" placeholder="Confirm Password" onChange={handleChange("re_enter_password")}/>
            </div>
            <button onClick={handleSubmit}> Create Account </button>
          </span>
        </form>

        <footer>
          <h1> Have an account? </h1>
          <a onClick={handleClick}> Log in here </a>
        </footer>
      </div>
    </div>
  )
}

export default SignUpForm;