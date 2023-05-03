import React from "react";
import $ from "jquery";
import { useState, useEffect } from "react";

const VideoGameItemPopUp = (id) => {
  const [ state, setState ] = useState({
    id: "",
    name: "",
    categories: "",
    developers: "",
    genres: "",
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
        })
      }
    })
  }, [])
  return (
    <div>
      <div>
        <h1> {state.id} </h1>
        
      </div>

      <div>
        <h1>{state.name}</h1>
        <div>
          Tags: {state.tags}
          Description:
          <a>Link</a>
        </div>
      </div>

      <div>
        <h1>Screenshots</h1>
        {/* array of images*/}
      </div>

      <div>
        <h1>Comments</h1>
      </div>
    </div>
  )
}

export default VideoGameItemPopUp;