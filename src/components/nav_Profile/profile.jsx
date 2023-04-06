import React from "react";
import UserDisplay from "./user_display/userDisplay";
import UserPostListing from "./user_display/userPostListing";

const Profile = (props) => {
  const { userId, currentUserId, fetchUser } = props;

  return(
    <div>
      <div className="profileButtons">
        <h1>Profile</h1>
        <h1>Settings</h1>
      </div>
      <UserDisplay/>
      <UserPostListing/>
    </div>
  )
}

export default Profile;