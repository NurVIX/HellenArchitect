import { Link } from "react-router-dom"
import "./master.css";
import Hero from "../../../../Hero/hero";
import ImageSlide from "../../../../SlideShow/slide";

const Hero_QuartoMaster = [
    {src:"images/Quartos/Hero_QuartoPage.webp", title:"Quartos Master"},
];

const QuartoMaster_um = [
    {src:"images/Quartos/Master/01/1.webp",title: "QuartoMaster1", index: 0},
    {src:"images/Quartos/Master/01/2.webp",title: "QuartoMaster2", index: 1},
    {src:"images/Quartos/Master/01/3.webp",title: "QuartoMaster3", index: 2},
    {src:"images/Quartos/Master/01/Closet1.webp",title: "QuartoMaster4", index: 3},
    {src:"images/Quartos/Master/01/closet3.webp",title: "QuartoMaster5", index: 4},
];
const QuartoMaster_two = [
    {src:"images/Quartos/Master/02-PRAIA/quarto_praia_1.webp",title: "QuartoMaster1", index: 0},
    {src:"images/Quartos/Master/02-PRAIA/quarto_praia_2.webp",title: "QuartoMaster2", index: 1},
    {src:"images/Quartos/Master/02-PRAIA/quarto_praia_3.webp",title: "QuartoMaster3", index: 2},
];
const QuartoMaster_three = [
    {src:"images/Quartos/Master/03/Quarto3_1.webp",title: "QuartoMaster1", index: 0},
    {src:"images/Quartos/Master/03/Quarto3_2.webp",title: "QuartoMaster1", index: 0},
];
const QuartoMaster_four = [
    {src:"images/Quartos/Master/4/Quarto4_1.webp",title: "QuartoMaster1", index: 0},
    {src:"images/Quartos/Master/4/Quarto4_2.webp",title: "QuartoMaster2", index: 1},
    {src:"images/Quartos/Master/4/Quarto4_3.webp",title: "QuartoMaster3", index: 2},
    {src:"images/Quartos/Master/4/Quarto4_4.webp",title: "QuartoMaster4", index: 3},
];
const Quarto_Master = () => {
    return (
        <>
            <Hero image={Hero_QuartoMaster[0]} />
            <div className="imageGridQuartoMaster">
                <ImageSlide slides={QuartoMaster_um}/>
                <ImageSlide slides={QuartoMaster_two}/>
                <ImageSlide slides={QuartoMaster_three}/>
                <ImageSlide slides={QuartoMaster_four}/>
            </div>
            <div className="central">
                <Link to='/Contato' className="OrcamentoButton">Orçamento</Link>
            </div>
        </>
    );
};

export default Quarto_Master;
