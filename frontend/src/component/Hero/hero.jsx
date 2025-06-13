import React from "react";
import './hero.css';
import { useLocation, useNavigate } from "react-router-dom";

const Hero  = ({image}) => {
    const location =  useLocation();
    const navigate = useNavigate();

    console.log(navigate);
    if (!image) return null;

    const isHomePage = location.pathname === "/";

    return(
        <div className="Hero-section">
            <img className="Hero-Background" src={image.src} alt={image.title} />
            {!isHomePage && (
            <div className="imageTitleOverlayBackground">
                <div className="imageTitleOverlayText">
                    <span className="returnIcon" onClick={() => navigate(-1)}>❰</span>
                    {image.title}</div>
            </div>
            )}
        </div>
    );
};

export default Hero;