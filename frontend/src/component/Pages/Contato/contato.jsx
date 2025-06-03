import React from "react";
import "./contato.css";
import Hero from "../../Hero/hero";

const Hero_Contato = [
    {src:"", title: "Contato"},
];

const Contato = () => {
    return(
        <>
            <Hero image={Hero_Contato[0]}/>
            <section className="central">
                <p>Hellenrocha.arq@gmail.com </p>
                <p>R. Manoel Vivácqua, 285 - Jabour, Vitória - ES, 29072-230, Brazil</p>
            </section>
            <form className="FormPlacement">
                <h3>Entre em contato comigo!</h3>
                <div className="ContactForm">
                    <label className="FormLabel">Nome</label>
                    <input type="Nome"/>
                    <label className="FormLabel">Email</label>
                    <input type="Email"/>
                    <label className="FormLabel">Mensagem</label>
                    <input type="Mensagem" className="MassageForm" />
                </div>
                <button type="submit" className="ContactButton">Enviar</button>
            </form>
        </>
    );

};

export default Contato;