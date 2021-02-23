import React from 'react';
import Logo from './../../assets/AJC Pizza Logo.png';
import './style.scss';

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="AJC Logo" />
                </div>
            </div>
        </header>
    );
};

export default Header;