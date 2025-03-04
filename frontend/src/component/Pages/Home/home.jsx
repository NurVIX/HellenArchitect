import React from "react";
import "./home.css";
import Hero from "../../Hero/hero";
import ImageGrid from "../../ImagesGrid/imagesGrid";


const homeGrid  = [
    {src: "/images/mainpage/Interiores_mainpage.webp", title: "Interiores", className:"shortphoto", link:"/Interiores"},
    {src: "/images/mainpage/MainPage_Arquitetura.webp", title: "Arquitetura", className:"mediumphoto", link:"/Arquitetura"},
    {src: "/images/mainpage/MainPage_Pousada.webp", title: "Pousada", className:"longphoto", link:"/Pousada"},
    {src: "/images/mainpage/MainPage_Mostras.webp", title: "Mostras", className:"mediumphoto", link:"/Mostras"},
    {src: "/images/mainpage/MainPage_OEscritorio.webp", title: "O Escritorio", className:"shortphoto", link:"/OEscritorio"},
    {src: "/images/mainpage/MainPage_Chafariz.webp", title: "Chafariz", className:"bottomimage"},
];



const Home = () => {
    return (
        <>
            <Hero image="../../images/mainpage/welcome_mainpage.webp"/>
            <ImageGrid images={homeGrid} />
        </>
    );
};

export default Home;