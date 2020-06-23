import React from 'react';
import {Link} from 'react-router-dom';


import './header.css';
import logo from './logo.jpg';

const Header = () => {  

       return (
        <div className="header d-flex">
        <Link to ="/"><img className="logo" src={logo} alt="star-wars" /></Link>
        <ul className="d-flex">
            <li> <Link to='/people'>People</Link></li>
            <li> <Link to='/planets'>Planets</Link></li>
            <li> <Link to='/starships'>Starships</Link></li>
            
        </ul>

    </div>
    );
};

export default Header;