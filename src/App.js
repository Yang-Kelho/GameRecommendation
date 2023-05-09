import React from 'react';
import HomeScreen from './components/home_screen/homeScreen';
import SaveScreen from './components/saved_screen/saveScreen';
import ListScreen from './components/list_screen/listScreen';
import CommunityScreen from './components/community_screen/communityScreen';
import Profile from './components/nav_Profile/profile';
import SearchBar from './components/searchBar/searchBar';
import SearchResult from './components/home_screen/searchResult';
import NavBar from './components/nav_bar/navBar';
import { useState } from "react";
import Modal from './components/modal/modal';
import SignUpForm from './components/nav_Profile/signUpForm';
import VideoGameItemDetails from './components/home_screen/video_game/videoGameItemDetails';

import './components/stylesheets/App.css';

import { Route, Router, Routes, Navigate } from 'react-router-dom';

const App = () => {
  const [ state, setState ] = useState({
    popUp: false,
    modal: "login",
    loggedIn: false,
  });

  const handlePopUp = () => {
    setState({
      ...state,
      popUp: !state.popUp,
    })
    console.log("hpu");
    console.log(state)
  }

  const handleAppChange = (field, value) => {
    setState({
      ...state,
      [field]: value,
    })
    console.log("appchange")
    console.log(state)
  }

  return (
    <div className='app'>
      {
        state.popUp ? (<Modal modal={state.modal} handlePopUp={handlePopUp}/>) : null
      }

      <div className='appNavBar'>
        <NavBar handlePopUp={handlePopUp} handleAppChange={handleAppChange}/>
      </div>
      <div className="appEverythingElse">
        <SearchBar handleAppChange={handleAppChange}/>
        <Routes>
          <Route path='/' element={<HomeScreen handlePopUp={handlePopUp} handleAppChange={handleAppChange}/>}/>
          <Route path='/home' element={<HomeScreen handlePopUp={handlePopUp} handleAppChange={handleAppChange}/>}/>
          <Route path='/saved' element={<SaveScreen/>}/>
          <Route path='/list' element={<ListScreen/>}/>
          <Route path='/community' element={<CommunityScreen/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/result' element={<SearchResult/>}/>
          <Route path='/signUp' element={<SignUpForm handlePopUp={handlePopUp} handleAppChange={handleAppChange}/>}/>
          <Route path='/app/:gameID' element={<VideoGameItemDetails/>}/>
        </Routes>
      </div>
    </div>
  )
}


export default App;
