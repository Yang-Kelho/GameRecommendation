import React from "react";
import SaveScreenTitle from "./saveScreenTitle";
import SavedGames from "./saved_games/savedGames";
import '../stylesheets/savedScreen.scss';
import $ from "jquery";
import { useState, useEffect } from "react";

const SaveScreen = () => {
  const [ array, setArray ] = useState([]);

  useEffect(() => {
    $.ajax({
      type: 'GET',
      url: "http://localhost:5000/game/saved",
      xhrFields:{withCredentials: true},
      success: (data) => {
        const arr = [];
        for (var game of data) {
          arr.push(game.id)
        }
        setArray(arr)
        console.log(data);
      },
    })
  }, [])
  
  return (
    <div className="saveScreen">
      <div>
        <SaveScreenTitle/>
        <SavedGames array={array}/>
      </div>
    </div>
  )
}

export default SaveScreen