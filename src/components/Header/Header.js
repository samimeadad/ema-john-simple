import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
import Shop from '../Shop/Shop';
import OrderReview from '../OrderReview/OrderReview';
import Inventory from '../Inventory/Inventory';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={ logo } alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;