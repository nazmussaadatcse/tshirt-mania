import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2 className='Header'>TShirt-Maina</h2>
            <h2>Context API <small>& Conditional Rendering</small></h2>
            
            <nav className='menu'>
                <Link to={"/home"}>Home</Link>
                <Link to={"/orderreview"}>Order Review</Link>
                <Link to={"/grandpa"}>Grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;