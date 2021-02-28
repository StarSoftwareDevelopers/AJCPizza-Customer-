import React from 'react';
import { useSelector } from 'react-redux';
import Logo from './../../assets/AJC Pizza Logo.png';
import './style.scss';
import {Link} from 'react-router-dom';
import { auth } from './../../firebase/utils';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Header = props => {

    const{currentUser } = useSelector(mapState);


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
                                    <Link to="/dashboardC">
                                        Order Status
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/account">
                                        My Account
                                    </Link>
                                </li>
                                <li>
                                    {/* You can change the Button to <span> based from the video. Button is taken
                                    from material UI */}
                                    <span onClick={() => auth.signOut()}>
                                        Logout
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