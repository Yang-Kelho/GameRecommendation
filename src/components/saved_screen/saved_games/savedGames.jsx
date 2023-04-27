import React from "react";
import SavedGamesCard from "./savedGamesCard";
import '../../stylesheets/savedScreen.scss';

const SavedGames = (props) => {
  const {array} = props;
  return(
    <div className="savedGameList">
        {array.map((num, i) => {
          return (
            <div>
              <SavedGamesCard key={i} props={props}/>
            </div>
          )
        })}      
    </div>
  )
}

export default SavedGames;