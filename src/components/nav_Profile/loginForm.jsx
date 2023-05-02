import React from "react";
import { useState } from "react";
import { login } from "../../utils/Ajax";
import { useEffect } from "react";
import '../stylesheets/modal.scss';
import $ from "jquery";

const LoginForm = props => {
  const { handlePopUp } = props;
  const [ state, setState ] = useState({
    username: "",
    password: "",
    loggedIn: false
  })
  
  const handleChange = (field) => {
    return e => setState({
      ...state,
      [field]: e.currentTarget.value
    })
  }

  const handleSubmit = () => {
    console.log("This came from the Login Form");
    console.log(state);
    // var frm = $('#1234');
    // $.ajax({
    //   type: frm.attr('method'),
    //   url: frm.attr('action'),
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
      <div className="blackscreen" onClick={handlePopUp}> </div>
      <div className="PopUpLogin">
        <form id="1234" action="http://127.0.0.1:5000/login" method="post">
          <input name="username" type="text" placeholder="Username" onChange={handleChange("username")}/>   
          <input name="password" type="text" placeholder="Password" onChange={handleChange("password")}/>
          <button onClick={handleSubmit}> Submit </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;