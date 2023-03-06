import React from "react";
import SaveScreenTitle from "./saveScreenTitle";
import SavedGames from "./saved_games/savedGames";
import '../stylesheets/savedScreen.css';

const SaveScreen = () => {
  const array = [1, 2, 3, 4]
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