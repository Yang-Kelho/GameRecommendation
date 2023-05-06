import React from "react";
import UserDisplay from "./user_display/userDisplay";
import UserPostListing from "./user_display/userPostListing";
import { state, useState } from "react";

const Profile = (props) => {  
  const [ state, setState ] = useState({
    displayName: "",
    profilePic: "",
  })
  return(
    <div>
      <div className="profileButtons">
        <h1>Profile</h1>
        <h1>Settings</h1>
      </div>

      <div>
        {state.displayName}
      </div>

      <div>
        <h1> Your Posts </h1>
      </div>
      <UserPostListing/>
    </div>
  )
}

export default Profile;