import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function NavBar() {

    const history = useHistory();

    function handleSearchClick() {
        console.log('Going to search!!');
        history.push('/');
    }

    function handleFavClick() {
        console.log('Going to favs!!');
        history.push('/favorites');
    }

    return (
        <>

            

            <Router>
                <header>
                    <h1>GIFS BABY</h1>
                    <h2>Where do you want to go?</h2>
                    <button onClick={handleSearchClick}>Search View</button>
                    <button onClick={handleFavClick}>Favorites View</button>

                    
                </header>
            </Router>
        </>
    )
    
}
export default NavBar;