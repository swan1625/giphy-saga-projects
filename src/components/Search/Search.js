import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const [searchGifs, setSearchGifs] = useState("");
  const searchResults = useSelector((store) => store.searchResults);

  // ================<SUBMIT SEARCH INPUT>============================
  const submitHandler = () => {
    console.log("in the submit handler", searchGifs);
    dispatch({ type: "SEARCH_GIFS", payload: searchGifs });
    setSearchGifs("");
  };
//------------------------------------------------------------------

// ================<FAV GIF CLICK LISTENER>============================
  function newFavorite(item) {
    console.log('You live it!!', item.url);
    dispatch({
      type: 'ADD_FAVORITE',
      payload: {
        url: item.url
    }})

  }


//------------------------------------------------------------------


  return (
    <>
    {/* ===========<INPUT & BUTTON TO SEARCH FOR GIFS>=================== */}
      <input
        value={searchGifs}
        onChange={(evt) => setSearchGifs(evt.target.value)}
      />
      <button onClick={submitHandler}> Search the GIFs </button>
    {/* ===========<INPUT & BUTTON TO SEARCH FOR GIFS>=================== */}

  {/* ====================<TERNARY OPERATOR>================================================ */}
      <div>
        {searchResults.length === 0 ? (
          <span></span>
        ) : 
        (
  // -------------------<APPEND SEARCHED GIFS>----------------------------------------
          searchResults.data.map((item, i) => (
            <div key={i}>
              <img src={item.images.fixed_height.url} />
              <button onClick={() => newFavorite(item)}>You like??</button>
            </div>
  // -------------------<APPEND SEARCHED GIFS>----------------------------------------
          ))
        )}
      </div>
  {/* ====================<TERNARY OPERATOR>================================================ */}

    </>
  );
}
export default Search;
