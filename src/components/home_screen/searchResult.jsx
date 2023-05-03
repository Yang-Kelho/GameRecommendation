import React from "react";
import $ from "jquery";

const handleClick = () => {
  $.ajax({
  url:"http://127.0.0.1:5000/10",
  type: 'GET',
  dataType: 'json',
  success : (data) => {
    
    console.log(data);
  }
});
}

const SearchResult = () => {

  return (
    <div>
      <button onClick={handleClick}>
        {"Search Results"}
      </button>
    </div>
  )
}

export default SearchResult;