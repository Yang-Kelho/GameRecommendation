import React from "react";
import SaveScreenTitle from "./saveScreenTitle";
import SavedGames from "./saved_games/savedGames";
import '../stylesheets/savedScreen.scss';
import $ from "jquery";

const SaveScreen = () => {
  const array = [1, 2, 3, 4];
  $.ajax({
      type: 'GET',
      url: "http://localhost:5000/game/saved",
      xhrFields:{withCredentials: true},
      success: function (data) {
          console.log(data);
      },
      error: function (data) {
          console.log(data);
      }
    })
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