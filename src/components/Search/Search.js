import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function Search() {
    const dispatch = useDispatch();
    const [searchGifs, setSearchGifs ] = useState('');
    const searchResults = useSelector(store => store.searchReducer)



    const submitHandler = () => {
        console.log('in the submit handler', searchGifs);
        dispatch ({type: 'SEARCH_GIFS', payload: searchGifs })
        setSearchGifs('');
        
        }


    return (
       <>
       <input 
       value={searchGifs}
       onChange={evt => setSearchGifs(evt.target.value)}
       />
       
       <button onClick={submitHandler}> Search the GIFs  </button>
       
       
       
       </>
    )
    
}
export default Search;