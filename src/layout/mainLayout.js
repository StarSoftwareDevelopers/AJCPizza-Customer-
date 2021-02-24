import React from 'react';
import Header from './../components/Header';
//import './style.scss';

const mainLayout = props => {
    return (
        <div>
            <Header />
            <div className="main">
                {props.children}
            </div>
        </div>
    );
};

export default mainLayout;