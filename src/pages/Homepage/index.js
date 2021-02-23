import React from 'react';
import Hero from './../../components/Hero';
import Directory from './../../components/Directory';
import './style.scss';

const Homepage = props => {
    return (
        <section className="homepage">
            <Directory />
        </section>
    );
};

export default Homepage;