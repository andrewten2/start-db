import React from 'react';
import './header.css';
import logo from './logo.jpg';

const Header = () => {   
       return (
    <div className="header d-flex">
        <a href ="/"><img className="logo" src={logo} alt="star-wars" /></a>
        <ul className="d-flex">
            <li> <a href='/'>People</a></li>
            <li> <a href='/'>Planets</a></li>
            <li> <a href='/'>Starships</a></li>
            
        </ul>

    </div>
    );
};

export default Header;