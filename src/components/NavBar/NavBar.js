import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function NavBar() {

    const history = useHistory();

    function handleAClick() {
        console.log('Going to search!!');
        history.push('/');
    }

    function handleTheClick() {
        console.log('Going to favs!!');
        history.push('/favorites');
    }

    return (
        <>

            

            <Router>
                <header>
                    <h1>GIFS BABY</h1>
                    {/* <li><Link to="/#/favorites" exact>Favorites</Link></li>
                    <li><Link to="/#/" exact>Search</Link></li>
                    <p>click the link then refresh, just a wireframe</p> */}
                    {/* <button onClick={handleAClick}>Search View</button> */}
                    <button onClick={handleAClick}>Search</button>
                    <button onClick={handleTheClick}>Favorites View</button>

                    
                </header>
            </Router>
        </>
    )
    
}
export default NavBar;