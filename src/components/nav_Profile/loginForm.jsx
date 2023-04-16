import React from "react";
import { useState } from "react";
import { login } from "../../utils/Ajax";
import { useEffect } from "react";
import '../stylesheets/modal.scss'

const LoginForm = props => {
  const {handlePopUp} = props

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
    <div >
      <div className="blackscreen" onClick={handlePopUp}></div>
      <div className="PopUpLogin">
        <form>
          <input type="text" value={state.email} placeholder="Email" onChange={handleChange("email")}/>   
          <input type="text" value={state.password} placeholder="Password" onChange={handleChange("password")}/>
          <button> Submit </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;