import React from "react";
import '../../stylesheets/savedScreen.scss';

import Slime_Rancher from './Slime_Rancher.jpg';

const SavedGamesCard = dic => {
  return(
    <div className="savedGamesItem">
      <div className="savedGamesImage">
        <img src={Slime_Rancher}/>
      </div>
      <h1>{"Testing"}</h1>
    </div>
  )
}

export default SavedGamesCard;