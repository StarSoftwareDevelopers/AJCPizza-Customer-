import React from 'react';
import Logo from './../../assets/AJC Pizza Logo.png';
import './style.scss';
import {Link} from 'react-router-dom';
import { auth } from './../../firebase/utils';

const Header = props => {

    const{currentUser } = props;


    return (
        <header className="header">
            <div className="wrap">
                
                    <div className="logo">
                    <Link to = "/">
                        <img src={Logo} alt="AJC Logo" />
                    </Link>
                    </div>

                    <div className="callingAction">

                        {currentUser && (
                            <ul>
                                <li>
                                    <span onClick={() => auth.signOut()}>
                                        LogOut
                                    </span>
                                </li>
                            </ul>
                        )}

                        {!currentUser && (
                             <ul>
                             <li>
                                 <Link to="/registration">
                                     Register
                                 </Link>
                             </li>
                             <li>
                                 <Link to="/login">
                                     Login
                                 </Link>
                             </li>
                         </ul>
                        )}
                       
                    </div>
                
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;