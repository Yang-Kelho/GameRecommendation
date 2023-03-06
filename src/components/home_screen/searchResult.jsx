import React from "react";
import $ from "jquery";

const thingy = () => {
  $.ajax({
    url: "127.0.0.1:5000/test",
    beforeSend: ( xhr ) => {
      xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
    }
  })
  .done(function( data ) {
    if ( console && console.log ) {
      console.log( "Sample of data:", data.slice( 0, 100 ) );
    }
  });
}

const SearchResult = () => {

  return (
    <div>
      <div onClick={thingy()}>
        Search Result
      </div>
    </div>
  )
}

export default SearchResult;