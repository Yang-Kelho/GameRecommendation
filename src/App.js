import React from 'react';
import HomeScreen from './components/home_screen/homeScreen';
import SaveScreen from './components/saved_screen/saveScreen';
import ListScreen from './components/list_screen/listScreen';
import CommunityScreen from './components/community_screen/communityScreen';
import Profile from './components/nav_Profile/profile';
import SearchBar from './components/searchBar/searchBar';
import SearchResult from './components/home_screen/searchResult';
import NavBar from './components/nav_bar/navBar';
import { useState, useEffect } from "react";
import Modal from './components/modal/modal';
import SignUpForm from './components/nav_Profile/signUpForm';
import VideoGameItemDetails from './components/home_screen/video_game/videoGameItemDetails';

import './components/stylesheets/App.css';

import { Route, Router, Routes, Navigate } from 'react-router-dom';
import $ from "jquery";

const App = () => {
  const [ state, setState ] = useState({
    popUp: false,
    modal: "login",
    loggedIn: false,
    username: "",
    savedGames: [],
  });

  const handlePopUp = () => {
    setState({
      ...state,
      popUp: !state.popUp,
    })
  }

  const handleAppChange = (field, value) => {
    console.log(field + " " + value);
    setState({
      ...state,
      [field]: value,
    })
    console.log("appchange")
    console.log(state)
  }

  useEffect(() => {
    $.ajax({
      url: "http://localhost:5000/profile",
      type: 'GET',
      xhrFields:{withCredentials: true},
      success: (data) => {
        // Get the backend to send data.result = true if it works.
        if (data.profile_name != null) {
          setState({
            ...state,
            username: data.profile_name,
            loggedIn: true,
          })
        }
        console.log(data)
      } 
    });
    if (state.loggedIn) {
      $.ajax({
        type: 'GET',
        url: "http://localhost:5000/game/saved",
        xhrFields:{withCredentials: true},
        success: (data) => {
          console.log(data)
          const arr = [];
          for (var game of data) {
            arr.push(game.id)
          }
          setState({
            ...state,
            savedGames: arr
          })
          console.log(data);
          console.log(state);
        },
      })
    }
  }, [state.loggedIn])


  return (
    <div className='app'>
      {
        state.popUp ? (<Modal modal={state.modal} handlePopUp={handlePopUp} handleAppChange={handleAppChange}/>) : null
      }

      <div className='appNavBar'>
        <NavBar loggedIn={state.loggedIn} username={state.username} handlePopUp={handlePopUp} handleAppChange={handleAppChange}/>
        <button onClick={() => {console.log(state)}}> State </button>
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
          <Route path='/app/:gameID' element={<VideoGameItemDetails savedGames={state.savedGames}/>}/>
        </Routes>
      </div>
    </div>
  )
}


export default App;
