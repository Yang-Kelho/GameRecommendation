import {React, useState} from "react";
import '../stylesheets/searchBar.scss';
import { useNavigate } from 'react-router-dom';
import $ from "jquery";

const SearchBar = () => {
  const [state, setState] = useState({
    title: "",
  });
  const { title, keywords } = state;
  // Use the above function later to make search bar
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(state);
    $.ajax({
      url:"http://127.0.0.1:5000/search",
      type: 'GET',
      data : {keywords : 'game-name'},
      dataType: 'json',
      success : (data) => {
        console.log(data);
      }
    });
    navigate('/result');
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
        <input className="searchTitle" type="text" onChange={handleChange("title")} value={title} placeholder="Title"/>
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