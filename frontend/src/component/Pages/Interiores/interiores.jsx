import React from "react";
import "./interiores.css";
import Hero from "../../Hero/hero";
import ImagesGrid from "../../ImagesGrid/imagesGrid";


const Hero_Interiores = [
    {src:"images/interior/interior_HERO.webp", title: "Interiores"},
];

const interiorGrid = [
    {src: "/images/interior/interior_gourmet.webp", title: "Area Gourmet", className:"gallery_Gourmet", link:"/Gourmet"},
    {src: "/images/interior/interior_lavabo.webp", title: "Lavabo", className:"gallery_Lavabo", link:"/lavabo"},
    {src: "/images/interior/interior_quartos.webp", title: "Quartos", className:"gallery_Quarto", link:"/quartos"},
    {src: "/images/interior/interior_escritorio.webp", title: "Escritorio", className:"gallery_Escritorio", link:"/escritorio"},
    {src: "/images/interior/interior_sala.webp", title: "Sala", className:"gallery_Sala", link:"/Sala"},
    {src: "/images/interior/inteiror_outros.webp", title: "Outros", className:"gallery_Outros", link:"/outros"},
    {src: "/images/interior/interior_cozinha.webp", title: "Cozinha", className:"gallery_Cozinha", link:"/cozinha"},
    {src: "/images/mainpage/MainPage_Chafariz.webp", title: "Chafariz", className:"gallery_Chafariz"},
    {src: "/images/interior_logo.webp", title: "Logo", className:"gallery_Logo"},
];

const Interior = () => {
    return (
        <>
            <Hero image={Hero_Interiores[0]}/>
            <ImagesGrid images={interiorGrid} wrapperClassName="imageGridInteriores"/>
        </>
    );
};

export default Interior;