import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const [searchGifs, setSearchGifs] = useState("");
  const searchResults = useSelector((store) => store.searchResults);

  const submitHandler = () => {
    console.log("in the submit handler", searchGifs);
    dispatch({ type: "SEARCH_GIFS", payload: searchGifs });
    setSearchGifs("");
  };

  return (
    <>
      <input
        value={searchGifs}
        onChange={(evt) => setSearchGifs(evt.target.value)}
      />

      <button onClick={submitHandler}> Search the GIFs </button>

      <div>
        {searchResults.length === 0 ? (
          <span></span>
        ) : (
          searchResults.data.map((item, i) => (
            <img key={i} src={item.images.fixed_height.url} />
          ))
        )}
      </div>
    </>
  );
}
export default Search;
