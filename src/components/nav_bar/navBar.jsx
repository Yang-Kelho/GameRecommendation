import React from "react";
import { useNavigate } from 'react-router-dom';
import home_icon from '../sprites/icons/home_icon.png';
import saved_icon from '../sprites/icons/saved_icon.png';
import list_icon from '../sprites/icons/list_icon.png';
import community_icon from '../sprites/icons/community_icon.png';
import '../stylesheets/navBar.scss';

const NavBar = props => {
  const { loggedIn, username, handlePopUp, handleAppChange } = props;
  const handleChange = () => {
    if (loggedIn) {
      navigate('/profile');
    }
    else {
      handleAppChange("modal", "login");
      handlePopUp();
    }
  }

  const navigate = useNavigate();

  const toHome = () => {
    navigate('/home');
  }

  const toSaved = () => {
    navigate('/saved');
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
            <button onClick={toHome}> <img src={home_icon} alt=""/> Home </button>
          </div>
          <div className="navSaved">
            <button onClick={toSaved}> <img src={saved_icon} alt=""/> Saved </button>
          </div>
          <div className="navList">
            <button onClick={toList}> <img src={list_icon} alt=""/> List </button>
          </div>
          <div className="navCommunity">
            <button onClick={toCommunity}> <img src={community_icon} alt=""/> Community </button>
          </div>
        </div>

      </div>

      <div className="navProfile">
        <button onClick={handleChange}> { loggedIn ? username : "Username"} </button>
      </div>
    </nav> 
  ) 
} 
 
export default NavBar; 