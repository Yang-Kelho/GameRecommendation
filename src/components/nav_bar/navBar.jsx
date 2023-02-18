import React from "react";
import { useNavigate } from 'react-router-dom';

import '../stylesheets/navBar.css';

const NavBar = props => {
  const { test, array } = props;
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
  return (
    <nav className="navBar">
      <div>
        <div className="gameRecommendation">
          <span> Game </span>
          <span> Recommendation </span> 
        </div> 

        <div className="home">
          <button onClick={toHome}> Home </button>
        </div>
        <div className="saved">
          <button onClick={toSaved}> Saved </button>
        </div>
        <div className="list">
          <button onClick={toList}> List </button>
        </div>
        <div>
          <div className="community">Community</div>
        </div>

      </div>

      <button onClick={() => console.log(array)}> array </button>

      <div>
        <div>Username</div>
      </div>
    </nav> 
  ) 
} 
 
export default NavBar; 