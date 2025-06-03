import React from "react";
import './hero.css';
import { useLocation } from "react-router-dom";

const Hero  = ({image}) => {
    const location =  useLocation();

    if (!image) return null;

    const isHomePage = location.pathname === "/";

    return(
        <div className="Hero-section">
            <img className="Hero-Background" src={image.src} alt={image.title} />
            {!isHomePage && (
            <div className="imageTitleOverlayBackground">
                <div className="imageTitleOverlayText">{image.title}</div>
            </div>
            )}
        </div>
    );
};

export default Hero;