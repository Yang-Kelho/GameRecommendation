import React from "react";
import $ from "jquery";
import { useState, useEffect } from "react";
import '../../stylesheets/modal.scss';
import Screenshot from "./screenshot";

const VideoGameItemPopUp = (id) => {
  const [ state, setState ] = useState({
    id: "",
    name: "",
    categories: "",
    developers: "",
    genres: "",
    description: "",
    header_image: "",
    screenshots: "",
  })

  useEffect(() => {

    $.ajax({
      url: "http://127.0.0.1:5000/10",
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
        })
      }
    })
  }, [])
  let screenshots = [];
  const displayScreenshots = () => {
    for (let i = 0; i < state.screenshots.length; i++) {
      screenshots.push(state.screenshots[i]);
    }
    console.log(screenshots);
    return screenshots;
  }
  displayScreenshots();

  return (
    <div className="PopUpGame">
      <div className="vgipuCoverImg">
        <img src={state.header_image}/>
      </div>
      <div className="vgipuData">
        <h1 className="title">{state.name}</h1>
        <div className="">
          <span> 
            <h1> Tags: {state.categories} </h1>
            <h1> Description: {state.description} </h1>
          </span>
          <a>Link</a>
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
    </div>
  )
}

export default VideoGameItemPopUp;