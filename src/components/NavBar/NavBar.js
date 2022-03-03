import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function NavBar() {
    return (
        <Router>
            <header>
                <h1>GIFS BABY</h1>
                <li><Link to="/#/favorites">Favorites</Link></li>
                <li><Link to="/#/">Search</Link></li>
                <p>click the link then refresh, just a wireframe</p>
                
            </header>
        </Router>
    )
    
}
export default NavBar;