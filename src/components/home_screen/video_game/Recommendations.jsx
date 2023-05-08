import React from "react";
import VideoGames from "./videoGames";
import $ from "jquery";
import { useState } from "react";

const Recommendations = (props) => {

  const [ state, setState ] = useState({
    videoGameArray: [],
  })

  const handleAppChange = props.handleAppChange;

  const findGames = () => {
    // $.ajax({
    //   url: "http://127.0.0.1:5000/recommendation/",
    //   type: 'GET',
    //   dataType: 'json',
    //   success : (data) => {
    //     console.log(data)
    //     for (let i = 0; i < 10; i++) {
    //       setState({
    //         ...state,
    //         videoGameArray: state.videoGameArray.push(data[i].id),
    //       })
    //     }
    //   }
    // })
  }

  findGames();
  return (
    <VideoGames videoGameArray={state.videoGameArray} />
  )
}

export default Recommendations;