import React from "react";
import SavedGamesCard from "./savedGamesCard";
import '../../stylesheets/savedScreen.scss';

const SavedGames = (props) => {
  const { array } = props;
  return(
    <div className="savedGameList">
        {array.map((gameID, i) => {
        return (
          <VideoGameItem gameID={gameID} key={i}/>
        )
      })}     
    </div>
  )
}

export default SavedGames;