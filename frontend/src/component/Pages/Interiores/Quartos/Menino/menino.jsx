import { Link } from "react-router-dom"
import "./menino.css";
import Hero from "../../../../Hero/hero";
import ImageSlide from "../../../../SlideShow/slide";

const Hero_QuartoMenino = [
    {src:"images/Quartos/Hero_QuartoPage.webp", title:"Quarto Menino"},
];

const QuartoMenino_um = [
    {src:"images/Quartos/Menino/01/QuartoMenino01_1.webp",title: "QuartoMenino1", index: 0},
    {src:"images/Quartos/Menino/01/QuartoMenino01_2.webp",title: "QuartoMenino2", index: 1},
    {src:"images/Quartos/Menino/01/QuartoMenino01_3.webp",title: "QuartoMenino3", index: 2},
    {src:"images/Quartos/Menino/01/QuartoMenino01_4.webp",title: "QuartoMenino3", index: 2},
];
const QuartoMenino_two = [
    {src:"images/Quartos/Menino/02/QuartoMenino02_1.webp",title: "QuartoMenino1", index: 0},
    {src:"images/Quartos/Menino/02/QuartoMenino02_2.webp",title: "QuartoMenino2", index: 1},
    {src:"images/Quartos/Menino/02/QuartoMenino02_3.webp",title: "QuartoMenino3", index: 2},
];

const QuartoMenino_three = [
    {src:"images/Quartos/Menino/03/QuartoMenino03_1.webp",title: "QuartoMenino1", index: 0},
    {src:"images/Quartos/Menino/03/QuartoMenino03_2.webp",title: "QuartoMenino2", index: 1},
    {src:"images/Quartos/Menino/03/QuartoMenino03_3.webp",title: "QuartoMenino3", index: 2},
];

const Quarto_Menino = () => {
    return (
        <>
            <Hero image={Hero_QuartoMenino[0]} />
            <div className="imageGridQuartoMenino">
                <ImageSlide slides={QuartoMenino_um}/>
                <ImageSlide slides={QuartoMenino_two}/>
                <ImageSlide slides={QuartoMenino_three}/>
            </div>
            <div className="central">
                <Link to='/Contato' className="OrcamentoButton">Orçamento</Link>
            </div>
        </>
    );
};

export default Quarto_Menino;
