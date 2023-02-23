import React from "react";
import { useNavigate } from 'react-router-dom';

import '../stylesheets/navBar.css';

const NavBar = props => {
  const navigate = useNavigate();
  const toSaved = () => {
    navigate('/saved');
  }

  const toHome = () => {
    navigate('/home');
  }

  const toList = () => {
    navigate('/list');
  }
  
  const toCommunity = () => {
    navigate('/community');
  }

  return (
    <nav className="navBar">
      <div>
        <div className="title">
          <span> Game </span>
          <span> Recommendation </span> 
        </div> 

        <div className="navButtonContainer">
          <div className="navHome">
            <button onClick={toHome}> Home </button>
          </div>
          <div className="navSaved">
            <button onClick={toSaved}> Saved </button>
          </div>
          <div className="navList">
            <button onClick={toList}> List </button>
          </div>
          <div className="navCommunity">
            <button onClick={toCommunity}> Community </button>
          </div>
        </div>

      </div>

      <div className="navProfile">
        <div>Username</div>
      </div>
    </nav> 
  ) 
} 
 
export default NavBar; 