import {React, useState} from "react";
import '../stylesheets/searchBar.css';

const SearchBar = () => {
  const [state, setState] = useState({
    title: "",
    keywords: "",
  });
  const { title, keywords } = state;
  // Use the above function later to make search bar
  const handleClick = () => {
    console.log(state);
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
        <input type="text" onChange={handleChange("title")} value={title}/>
      </div>

      <div>
        <textarea onChange={handleChange("keywords")} value={keywords} cols="30" rows="10"></textarea>
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