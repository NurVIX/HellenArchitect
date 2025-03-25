import React from "react";
import Hero from "../../Hero/hero";
import ImagesGrid from "../../ImagesGrid/imagesGrid";
import "./Escritorio.css";

const EscritorioGrid = [
    {src: "images/O_Escritorio/Escritorio_01.webp" },
    {src: "images/O_Escritorio/Escritorio_02.webp"},
    {src: "images/O_Escritorio/Escritorio_03.webp"},
    {src: "images/O_Escritorio/Escritorio_01.webp"},
    {src: "images/O_Escritorio/Escritorio_01.webp"},
]

const O_Escritorio = () => {
    return (
        <>
            <Hero image="images\O_Escritorio\FACHADA_PORTA_PRETA.webp" />
            <ImagesGrid className="" images={EscritorioGrid}/>
        </>

    );
};
export default O_Escritorio;