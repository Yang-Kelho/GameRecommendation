import React from 'react';
import HomeScreen from './components/home_screen/homeScreen';
import SaveScreen from './components/saved_screen/saveScreen';
import ListScreen from './components/list_screen/listScreen';
import NavBar from './components/nav_bar/navBar';
import CommunityScreen from './components/community_screen/communityScreen';

import './components/stylesheets/App.css';

import { Route, Router, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <div className='appNavBar'>
        <NavBar/>
      </div>
        <div className="appEverythingElse">
          <Routes>
            <Route path='/' element={
                <HomeScreen/>
            }/>
            <Route path='/home' element={<HomeScreen/>}/>
            <Route path='/saved' element={<SaveScreen/>}/>
            <Route path='/list' element={<ListScreen/>}/>
            <Route path='/Community' element={<CommunityScreen/>}/>
          </Routes>
        </div>
    </div>
  )
}
export default App;
