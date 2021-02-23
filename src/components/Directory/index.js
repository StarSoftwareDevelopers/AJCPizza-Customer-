import React from 'react';
import './style.scss';
import {
    HeroItems,
    HeroP,
    HeroBtn,
    HeroContent,
    HeroH1
} from './Elements';
import PizzaWelcome from './../../assets/pizzacarousel.png';
const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div 
                    className="item"
                    style={{
                        backgroundImage: `url(${PizzaWelcome})`
                    }}
                    >
                        <content>
                <items>
                <h1>AJC Homemade Pizza</h1>
                <p>The Best & Mouth-watering Pizza in Ayala</p>
                <btn>Order Now</btn>
                </items>
            </content>
                </div>
            </div>
        </div>
    );
}

export default Directory;