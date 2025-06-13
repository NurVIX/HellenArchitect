import React from "react";
import "./quartos.css";
import Hero from "../../../Hero/hero";
import ImagesGrid from "../../../ImagesGrid/imagesGrid";


const Hero_Quartos = [
    {src:"images/Quartos/Hero_QuartoPage.webp", title: "Quartos"},
];

const QuartoMenu = [
    {src: "/images/Quartos/Master-QuartoPage.webp", title: "Quartos Master", link:"/Quarto_Master"},
    {src: "/images/Quartos/Menina-QuartoPage.webp", title: "Quartos Menina ", link:"/Quarto_Menina"},
    {src: "/images/Quartos/Menino-QuartoPage.webp", title: "Quartos Menino", link:"/Quarto_Menino"},
];


const Quartos = () => {
    return (
        <>
            <Hero image={Hero_Quartos[0]}/>
            <ImagesGrid images={QuartoMenu} wrapperClassName="imageGridQuartos"/>
        </>
    );
};

export default Quartos;