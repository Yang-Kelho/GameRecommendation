import React from "react";
import { useState, useEffect } from "react";
import { login } from "../../utils/Ajax";
import '../stylesheets/modal.scss';
import $ from "jquery";
import { useNavigate } from "react-router-dom";

const LoginForm = props => {
  const [ state, setState ] = useState({
    username: "",
    password: "",
    loggedIn: false
  })
  const navigate = useNavigate()

  const toProfile = () => {
    navigate('/profile');
  }

  const handleChange = (field) => {
    return e => setState({
      ...state,
      [field]: e.currentTarget.value
    })
  }

  const handleSubmit = () => {
    console.log("This came from the Login Form");
    console.log(state);
    toProfile();
    // var frm = $('#1234');
    // $.ajax({
    //   type: 'POST',
    //   url: "http://127.0.0.1:5000/login",
    //   data: frm.serialize(),
    //   success: function (data) {
    //       console.log('Submission was successful.');
    //       console.log(data);
    //   },
    //   error: function (data) {
    //       console.log('An error occurred.');
    //       console.log(data);
    //   }
    // })    
  }

  return (
    <div>
      <div className="PopUpLogin">
        <form id="1234">
          <input name="username" type="text" placeholder="Username" onChange={handleChange("username")}/>   
          <input name="password" type="text" placeholder="Password" onChange={handleChange("password")}/>
          <button onClick={handleSubmit}> Submit </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;