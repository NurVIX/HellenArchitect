
import React from "react";
import Hero from "../../Hero/hero";
import ImagesGrid from "../../ImagesGrid/imagesGrid";
import "./Escritorio.css";

const Hero_OEscritorio =[
     {src: "images/O_Escritorio/Hero_O_Escritorio.webp", title:"O Escritorio" },
];

const EscritorioGrid = [
    {src: "images/O_Escritorio/Escritorio_01.webp"},
    {src: "images/O_Escritorio/Escritorio_02.webp"},
    {src: "images/O_Escritorio/Escritorio_03.webp"},
    {src: "images/O_Escritorio/Escritorio_04.webp"},
    {src: "images/O_Escritorio/Escritorio_05.webp"},
    {src: "images/O_Escritorio/Escritorio_06.webp"},
];

const O_Escritorio = () => {
    return (
        <>
            <Hero image={Hero_OEscritorio[0]}/>
            <ImagesGrid images={EscritorioGrid} wrapperClassName="imageGridEscritorio"/>
        </>

    );
};
export default O_Escritorio;