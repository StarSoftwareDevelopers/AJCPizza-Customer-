import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

const HomeLayout = props => {
    return (
        <div className="peakheight">
            <Header {...props}/>
            <div className="main">
                {props.children}
                <Footer />
            </div>
        </div>
    );
};

export default HomeLayout;