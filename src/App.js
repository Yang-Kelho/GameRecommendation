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
import Modal from './components/modal/modal';

import './components/stylesheets/App.css';

import { Route, Router, Routes, Navigate } from 'react-router-dom';

const App = () => {
  const [ state, setState ] = useState({
    popUp: false,
    modal: "",
    gameID: "",
  });

  const handlePopUp = () => {
    setState({
      ...state,
      popUp: !state.popUp
    })
    console.log(state)
  }

  const handleAppChange = (field, value) => {
    setState({
      ...state,
      popUp: !state.popUp,
      [field]: value
    })
    console.log("appchange")
    console.log(state)
  }

  return (
    <div className='app'>
      {
        state.popUp ? (<Modal modal={state.modal} handlePopUp={handlePopUp} handleAppChange={handleAppChange} gameID={state.gameID}/>) : null
      }

      <div className='appNavBar'>
        <NavBar handlePopUp={handlePopUp}/>
      </div>
        <div className="appEverythingElse">
          <Routes>
            <Route path='/' element={<HomeScreen handlePopUp={handlePopUp} handleAppChange={handleAppChange}/>}/>
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
