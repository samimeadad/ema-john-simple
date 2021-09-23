import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>This is our header</h1>
            <img className="logo" src={ logo } alt="" />
        </div>
    );
};

export default Header;