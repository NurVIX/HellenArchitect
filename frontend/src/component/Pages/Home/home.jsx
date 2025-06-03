import React from "react";
import "./home.css";
import Hero from "../../Hero/hero";
import ImageGrid from "../../ImagesGrid/imagesGrid";


const Hero_Home = [
    {src:"../../images/mainpage/welcome_mainpage.webp", title: "Bem Vindo!"},
];
const homeGrid  = [
    {src: "/images/mainpage/Interiores_mainpage.webp", title: "Interiores", className:" gallery__item--1", link:"/Interiores"},
    {src: "/images/mainpage/MainPage_Arquitetura.webp", title: "Arquitetura" ,className:"gallery__item--2", link:"/Arquitetura"},
    {src: "/images/mainpage/MainPage_Pousada.webp", title: "Pousada", className:"gallery__item--3", link:"/Pousada"},
    {src: "/images/mainpage/MainPage_Mostras.webp", title: "Mostras", className:"gallery__item--4", link:"/Mostras"},
    {src: "/images/mainpage/MainPage_OEscritorio.webp", title: "O Escritorio", className:"gallery__item--5", link:"/OEscritorio"},
    {src: "/images/mainpage/MainPage_Chafariz.webp", title: "Chafariz", className:"gallery__item--6"},
];



const Home = () => {
    return (
        <>
            <Hero image={Hero_Home[0]}/>
            <ImageGrid images={homeGrid} wrapperClassName="imageGridHome" />
        </>
    );
};

export default Home;