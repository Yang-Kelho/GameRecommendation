import {React, useState} from "react";
import '../stylesheets/searchBar.scss';
import { useNavigate } from 'react-router-dom';
import $ from "jquery";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";

const SearchBar = () => {
  const [state, setState] = useState({
    title: "",
    headerURL: "", 
    options: [],
  });
  
  // Use the above function later to make search bar
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(state);
    $.ajax({
      url:"http://127.0.0.1:5000/search",
      type: 'GET',
      data : {keywords : state.title},
      dataType: 'json',
      success : (data) => {
        setState({
          ...state,
          headerURL: data.headerURL
        })
        console.log(data);
      }
    });
    navigate('/result');
  }
  const generateOptions = () => {
    // Generate options[] array to use for MaterialUI search box.
    //
    // setState({
    //   ...state,
    //   options: 
    // })
  }
  const handleChange = query => {
    return e => setState({
      ...state,
      [query]: e.currentTarget.value
    })
  }

  return (
    <div className="searchBar">
      <div>
        <input className="searchTitle" type="text" onChange={handleChange("title")} value={state.title} placeholder="Title"/>
      </div>

      <div>
      <Autocomplete
        className="searchTitle"
        disablePortal
        id="combo-box"
        options={state.options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Game" />}
      />
      </div>

      <div>
        <button onClick={handleClick}>
          search
        </button>
      </div>
    </div>
  )
}

export default SearchBar;