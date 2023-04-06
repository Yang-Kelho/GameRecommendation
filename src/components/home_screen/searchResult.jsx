import React from "react";
import $ from "jquery";

const handleClick = () => {
  $.ajax({
  url:"http://127.0.0.1:5000/test",
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
      <div onClick={handleClick}>
        {"Search Results"}
      </div>
    </div>
  )
}

export default SearchResult;