import React from "react";
import "./lavabo.css";
import Hero from "../../../Hero/hero";
import ImagesGrid from "../../../ImagesGrid/imagesGrid";

const lavaboGrid = [
    {src: "/images/interior/LAVABO/LAVABO_01.webp", className:"PictureSize"},
    {src: "/images/interior/LAVABO/LAVABO_02.webp", className:"PictureSize"},
    {src: "/images/interior/LAVABO/LAVABO_HERO.webp",  className:"PictureSize"},
    {src: "/images/interior/LAVABO/LAVABO_03.webp", className:"PictureSize"},
]

const Lavabo = () => {
    return (
        <>
            <Hero image="/images\interior\LAVABO\LAVABO_HERO.webp"/>
            <div className="GridContainer"> 
                <ImagesGrid images={lavaboGrid}/>
            </div> 
        </>
    );
};
export default Lavabo;