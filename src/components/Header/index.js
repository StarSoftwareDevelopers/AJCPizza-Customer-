import React from 'react';
import Logo from './../../assets/AJC Pizza Logo.png';
import './style.scss';
import {Link} from 'react-router-dom';

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <Link to = "/">
                    <div className="logo">
                        <img src={Logo} alt="AJC Logo" />
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;