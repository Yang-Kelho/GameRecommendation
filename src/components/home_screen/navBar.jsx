import React from "react";
import './navBar.css';

const NavBar = () => {
  return (
    <nav className="navBar">
      <div>
        <div className="gameRecommendation">
          <span> Game </span>
          <span> Recommendation </span> 
        </div> 

        <div>
          <div>Home</div>
        </div>
        <div>
          <div>Saved</div>
        </div>
        <div>
          <div>List</div>
        </div>
        <div>
          <div>Community</div>
        </div>

      </div>

      <div>
        <div>Username</div>
      </div>
    </nav> 
  ) 
} 
 
export default NavBar; 