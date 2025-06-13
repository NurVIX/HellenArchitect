import React from "react";
import { Link } from "react-router-dom";
import "./areaGourmet.css";
import Hero from "../../../Hero/hero";
import ImageSlide from "../../../SlideShow/slide";

const Hero_AreaGourmet = [
    {src:"/images/interior/interior_gourmet.webp", title:"Area Gourmet"}
];

const AreaGourmet_one = [
    {src:"images/interior/AreaGourmet/01/AreaGourmet01_1.webp", index:0},
    {src:"images/interior/AreaGourmet/01/AreaGourmet01_2.webp", index:1},
    {src:"images/interior/AreaGourmet/01/AreaGourmet01_3.webp", index:2},
];
const AreaGourmet_two = [
    {src:"images/interior/AreaGourmet/02/AreaGourmet02_1.webp", index:0},
    {src:"images/interior/AreaGourmet/02/AreaGourmet02_2.webp", index:1},
    {src:"images/interior/AreaGourmet/02/AreaGourmet02_3.webp", index:2},
    {src:"images/interior/AreaGourmet/02/AreaGourmet02_4.webp", index:3},
];

const AreaGourmet_three = [
    {src:"images/interior/AreaGourmet/03/AreaGourmet03_1.webp", index:0},
    {src:"images/interior/AreaGourmet/03/AreaGourmet03_2.webp", index:1},
    {src:"images/interior/AreaGourmet/03/AreaGourmet03_3.webp", index:2},
    {src:"images/interior/AreaGourmet/03/AreaGourmet03_4.webp", index:2},
];

const AreaGourmet = () => {
    return (
        <>
            <Hero image={Hero_AreaGourmet[0]}/> 
            <div className="imageGridAreaGourmet">  
                <ImageSlide slides={AreaGourmet_one}/>
                <ImageSlide slides={AreaGourmet_two}/>
                <ImageSlide slides={AreaGourmet_three}/>
            </div> 
            <div className="central">
                <Link to='/Contato' className="OrcamentoButton">Orçamento</Link>
            </div>
        </>
    );
};
export default AreaGourmet;