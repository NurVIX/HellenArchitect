import React from "react";
import './hero.css';

const Hero  = ({image}) => {
    console.log(image) 
    return(
        <div className="Hero-section">
            <img className="Hero-Background" src={image} alt="Hero Background"/>
        </div>
    );
};

export default Hero;