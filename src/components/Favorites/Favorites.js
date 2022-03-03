import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Favorites() {

    const dispatch = useDispatch();
    const favorites = useSelector(store => store.favoritesList)

    useEffect(() => {
        dispatch({type: 'FETCH_FAVORITE'})
    }, []);

    
    return (
       <>
      <p>FAVES GO HERE</p>
      <ul>
      {favorites.map((favorite, i) => (
          <li key={i}>
            {favorite.url}
          </li>
        ))}
      </ul>
       </>
    )
    
}
export default Favorites;