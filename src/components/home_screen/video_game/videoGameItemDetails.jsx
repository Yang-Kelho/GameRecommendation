import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import $ from "jquery";
import '../../stylesheets/videoGame.scss';
import Screenshot from "./screenshot";
import VideoGames from "./videoGames";
import like_icon from "../../sprites/icons/like_icon.png";
import like_icon_filled from "../../sprites/icons/like_icon_filled.png";

const VideoGameItemDetails = (props) => {
  const { gameID } = useParams();
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [developers, setDevelopers] = useState("");
  const [genres, setGenres] = useState("");
  const [description, setDescription] = useState("");
  const [headerImage, setHeaderImage] = useState("");
  const [screenshots, setScreenshots] = useState([]);
  const [similarGames, setSimilarGames] = useState([]);
  const { savedGames } = props;

  const handleLike = (e) => {
    $.ajax({
      url: `http://127.0.0.1:5000/game/add`,
      type: "GET",
      data : {id : gameID},
      success: () => {
        window.location.reload();
      }
    })
  }
  useEffect(() => {
    const fetchData = async () => {
      await $.ajax({
        url: `http://127.0.0.1:5000/game/${gameID}`,
        type: "GET",
        dataType: "json",
        success: (data) => {
          setName(data.name);
          setCategories(data.categories);
          setDevelopers(data.developers);
          setGenres(data.genres);
          setDescription(data.detailed_description);
          setHeaderImage(data.header_image);
          setScreenshots(data.screenshots);
        },
      });
    };
    fetchData();
  }, [gameID]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const data = await $.ajax({
        url: "http://127.0.0.1:5000/game/recommendation",
        type: 'GET',
        data: {game: name.replace("+", "%2B")},
        dataType: 'json',
      });
      console.log(data)
      const arr = [];
      for (var game of data) {
        const gameData = await $.ajax({
          url:"http://127.0.0.1:5000/game/search",
          type: 'GET',
          data : {keywords : game.replace("+", "%2B")},
          dataType: 'json',
        });
        console.log(gameData[0].id)
        arr.push(gameData[0].id);
      };
      setSimilarGames(arr);
    };
    fetchRecommendations();
  }, [name]);
  return (
    <div className="Game">
      <div className="layer1">
        <div className="vgipuCoverImg">
          <img src={headerImage} alt={name} />
        </div>
        <div className="vgipuData">
          <div className="heart">
            {savedGames.includes(parseInt(gameID)) ? <img src={like_icon_filled}/> : <img src={like_icon} onClick={() => handleLike()} />}
          </div>
          <h1 className="title">{name}</h1>
          <div className="metadata">
            <span> 
              <h1> Tags: {categories.join(" | ")} </h1>
              <br />
              <h1> Description: {description} </h1>
              <br />
            </span>
            <a>Link</a>
          </div>
        </div>
        

    </div>
        <div className="vgipuScreenshotContainer">
          <h1>Screenshots</h1>
          <div className="vgipuScreenshots">
          {
            screenshots.map((idx) => {
              return (
                <Screenshot image={idx} />
              )
            })
          }
        </div>
      </div>

      <div>
        <h1>Recommended Games for you:</h1>
      </div>
    <div className="similarGamesContainer">
      {console.log(similarGames)}
      {<VideoGames videoGameArray={similarGames}/>}
    </div>
  </div>
  )
}

export default VideoGameItemDetails;