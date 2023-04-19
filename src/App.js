import React from 'react';
import HomeScreen from './components/home_screen/homeScreen';
import SaveScreen from './components/saved_screen/saveScreen';
import ListScreen from './components/list_screen/listScreen';
import CommunityScreen from './components/community_screen/communityScreen';
import Profile from './components/nav_Profile/profile';
import SearchResult from './components/home_screen/searchResult';
import NavBar from './components/nav_bar/navBar';
import LoginForm from './components/nav_Profile/loginForm';
import { useState } from "react";

import './components/stylesheets/App.css';

import { Route, Router, Routes, Navigate } from 'react-router-dom';

const App = () => {
  const [ state, setState ] = useState({
    popUp: false
  });

  const handlePopUp = () => {
    setState({
      ...state,
      popUp: !state.popUp
    })
    console.log(!state.popUp);
  }

  return (
    <div className='app'>
      {
        state.popUp ? (<LoginForm handlePopUp={handlePopUp}/>) : null
      }

      <div className='appNavBar'>
        <NavBar handlePopUp={handlePopUp}/>
      </div>
        <div className="appEverythingElse">
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/home' element={<HomeScreen/>}/>
            <Route path='/saved' element={<SaveScreen/>}/>
            <Route path='/list' element={<ListScreen/>}/>
            <Route path='/community' element={<CommunityScreen/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/result' element={<SearchResult/>}/>
          </Routes>
        </div>
    </div>
  )
}


export default App;
