import React from 'react';
import logo from '../../images/Ffavicon.png';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className='header' >
                <img src={logo} alt="" />
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;