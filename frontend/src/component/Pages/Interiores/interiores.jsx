import React from "react";
import "./interiores.css";
import Hero from "../../Hero/hero";
import ImagesGrid from "../../ImagesGrid/imagesGrid";



const interiorGrid = [
    {src: "/images/interior/interior_quartos.webp", title: "Quartos", className:"shortPhoto", link:"/quartos"},
    {src: "/images/interior/interior_gourmet.webp", title: "Gourmet", className:"shortPhoto", link:"/Gourmet"},
    {src: "/images/interior/interior_lavabo.webp", title: "Lavabo", className:"shortPhoto", link:"/lavabo"},
    {src: "/images/interior/interior_escritorio.webp", title: "Escritorio", className:"shortPhoto", link:"/escritorio"},
    {src: "/images/interior/interior_sala.webp", title: "Sala", className:"shortPhoto", link:"/Sala"},
    {src: "/images/interior/inteiror_outros.webp", title: "Outros", className:"shortPhoto", link:"/outros"},
    {src: "/images/interior/interior_cozinha.webp", title: "Cozinha", className:"shortPhoto", link:"/cozinha"},
    {src: "/images/mainpage/MainPage_Chafariz.webp", title: "Chafariz", className:"bottomImage"},
    {src: "/images/interior_logo.webp", title: "Logo", className:"logoBottomPage"},
];

const Interior = () => {
    console.log(interiorGrid)
    return (
        <>
            <Hero image="../../images/interior/interior_HERO.webp"/>
            <ImagesGrid images={interiorGrid}/>
        </>
    );
};

export default Interior;