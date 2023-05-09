import React from "react";
import VideoGameItem from "../../home_screen/video_game/videoGameItem";
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