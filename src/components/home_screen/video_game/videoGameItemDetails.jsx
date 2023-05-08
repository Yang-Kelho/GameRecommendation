import React from "react";
import $ from "jquery";
import { useState, useEffect } from "react";
import '../../stylesheets/videoGame.scss';
import Screenshot from "./screenshot";
import { useParams } from "react-router-dom";
import VideoGames from "./videoGames";

const VideoGameItemDetails = (props) => {
  const { gameID } = useParams();
  const [ state, setState ] = useState({
    id: gameID,
    name: "",
    categories: [],
    developers: "",
    genres: "",
    description: "",
    header_image: "",
    screenshots: "",
    similar_games: [],
  })

  useEffect(() => {
    $.ajax({
      url: "http://127.0.0.1:5000/game/" + gameID,
      type: 'GET',
      dataType: 'json',
      success : (data) => {
        setState({
          ...state,
          id: data.id,
          name: data.name,
          categories: data.categories,
          developers: data.developers,
          genres: data.genres,
          description: data.detailed_description,
          header_image: data.header_image,
          screenshots: data.screenshots,
        });
        console.log(state);
      }
    });
  }, [])
  useEffect(() => {
    console.log(state.name);
    $.ajax({
      url: "http://127.0.0.1:5000/game/recommendation",
      type: 'GET',
      data: {game: state.name},
      dataType: 'json',
      success : (data) => {
        setState({
          ...state,
          similar_games: Object.values(data),
        })
        const arr = [];
        for (var game in state.similar_games) {
          $.ajax({
            url:"http://127.0.0.1:5000/game/search",
            type: 'GET',
            data : {keywords : game},
            dataType: 'json',
            success : (data) => {
              arr.push(data[0].id);
            }
          });
        };
        setState({
          ...state,
          similar_games: arr,
        })
      }
    })
  }, [])
  let screenshots = [];
  const displayScreenshots = () => {
    for (let i = 0; i < state.screenshots.length; i++) {
      screenshots.push(state.screenshots[i]);
    }
    return screenshots;
  }
  displayScreenshots();

  return (
    <div className="Game">
      <div className="layer1">
        <div className="vgipuCoverImg">
          <img src={state.header_image}/>
        </div>
        <div className="vgipuData">
          <h1 className="title">{state.name}</h1>
          <div className="metadata">
            <span> 
              <h1> Tags: {state.categories.join(" | ")} </h1>
              <br />
              <h1> Description: {state.description} </h1>
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
        <h1>Comments</h1>
      </div>

      <div className="similarGamesContainer">
        {<VideoGames videoGameArray={state.similar_games}/>}
      </div>
    </div>
  )
}

export default VideoGameItemDetails;