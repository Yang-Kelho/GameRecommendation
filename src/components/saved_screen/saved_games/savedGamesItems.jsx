import React from "react";
import '../../stylesheets/savedScreen.css';

import Slime_Rancher from './Slime_Rancher.jpg';

const SavedGamesItems = dic => {
  return(
    <div className="savedGamesItem">
      <img src={Slime_Rancher}/>
    </div>
  )
}

export default SavedGamesItems;