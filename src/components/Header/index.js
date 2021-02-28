import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {signOutUserStart} from './../../Redux/User/user.actions';
import Logo from './../../assets/AJC Pizza Logo.png';
import './style.scss';
import {Link} from 'react-router-dom';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Header = props => {
    const dispatch = useDispatch();
    const{currentUser } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUserStart());
    };

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
                                    <span onClick={() => signOut()}>
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