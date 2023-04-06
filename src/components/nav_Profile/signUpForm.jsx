import React from "react";
import { useState } from "react";
import { signup } from "../../utils/Ajax";
import { useEffect } from "react";

const LoginForm = () => {

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
      <button> Submit </button>
    </div>
  )
}

export default LoginForm;