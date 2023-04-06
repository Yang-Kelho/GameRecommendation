import React from "react";
import SavedGamesItems from "./savedGamesItems";
import '../../stylesheets/savedScreen.css';

const SavedGames = (props) => {
  const {array} = props;
  return(
    <div className="savedGame">
        {array.map((num, i) => {
          return (
            <div>
              <SavedGamesItems key={i} props={props}/>
            </div>
          )
        })}      
    </div>
  )
}

export default SavedGames;