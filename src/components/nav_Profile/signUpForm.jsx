import React from "react";
import { useState } from "react";
import { signup } from "../../utils/Ajax";
import { useEffect } from "react";
import $ from "jquery";

const SignUpForm = () => {

  const handleClick = () => {
    $.ajax({
    url:"http://127.0.0.1:5000/profile",
    type: 'GET',
    xhrFields: {withCredentials: true}, 
    crossDomain: true,
    dataType: 'json',
    success : (data) => {
      console.log(data);
    }
  });
  }

  const [ state, setState ] = useState({
    email: "",
    password: ""
  })
  
  const handleChange = (field) => {
    return e => setState({
      ...state,
      [field]: e.currentTarget.value
    })
  }

  const handleSubmit = () => {
    
  }

  return (
    <div className="PopUpLogin">
      <input type="text" value={state.email} placeholder="Email" onChange={handleChange("email")}/>   
      <input type="text" value={state.password} placeholder="Password" onChange={handleChange("password")}/>
      <button onClick={handleClick}> Submit </button>
    </div>
  )
}

export default SignUpForm;