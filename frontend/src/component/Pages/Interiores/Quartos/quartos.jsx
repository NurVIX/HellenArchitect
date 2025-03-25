import React from "react";
import "./quartos.css";
import Hero from "../../Hero/hero";
import ImagesGrid from "../../ImagesGrid/imagesGrid";

const QuartoMenu = [
    {src: "/images/Quartos/Master-QuartoPage.webp", title: "Quartos", className:"shortPhoto", link:"/quartomaster"},
    {src: "/images/Quartos/Menina-QuartoPage.webp", title: "Quartos", className:"shortPhoto", link:"/quartosmenina"},
    {src: "/images/Quartos/Menino-QuartoPage.webp", title: "Quartos", className:"shortPhoto", link:"/quartosmenino"},
];


const Quartos = () => {
    return (
        <>
            <Hero image="../../imagens/Quartos/Hero_QuartoPage.webp"/>
            <ImagesGrid images={QuartoMenu}/>
        </>
    );
};

export default Quartos;