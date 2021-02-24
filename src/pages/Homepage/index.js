import React from 'react';
import Hero from './../../components/Hero';
import Directory from './../../components/Directory';
import './style.scss';
import Header from '../../components/Header';

const Homepage = props => {
    return (

        <section className="homepage">
            <Header/>
            <Directory />
        </section>
    );
};

export default Homepage;