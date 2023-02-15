import {React, useState} from "react";

const SearchBar = () => {
  const [state, setState] = useState({
    query: ""
  });
  const { query } = state;
  // Use the above function later to make search bar
  const handleClick = () => {
    console.log("Click");
  }

  const handleChange = e => {
    e.preventDefault();
    setState({
      ...state,
      query: e.currentTarget.value
    })
  }

  return (
    <div className="searchBar">
      <div>
        <input type="text" onChange={handleChange} value={query}/>
      </div>

      <div>
        <textarea cols="30" rows="10"></textarea>
      </div>

      <div>
        <div onClick={handleClick}>
          search
        </div>
      </div>
    </div>
  )
}

export default SearchBar;