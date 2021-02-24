import React from 'react';
import Header from './../components/Header';
//import './style.scss';

const HomeLayout = props => {
    return (
        <div className="peakheight">
            <Header />
            <div className="main">
                {props.children}
            </div>
        </div>
    );
};

export default HomeLayout;