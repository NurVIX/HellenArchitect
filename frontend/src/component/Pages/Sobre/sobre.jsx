import React from "react";
import "./sobre.css";
import Hero from "../../Hero/hero";


const Sobre = () => {
    return (
        <>
            <Hero image="../../images/Sobre/Hero_Sobre.webp"/>
            <div className="sobreContainer">
                <div className="sobreTitleContainer">
                    <h2>Olá, seja bem-vindo ao meu universo!</h2>
                </div>
                <div className="ContentContainer">
                    <div className="sobreContentRow">
                        <div className="textSobre">Meu nome é Hellen Rocha, atuo na área de arquitetura e interiores há 17 anos, já participei de 5 edições de CASACOR e inúmeras mostras de lojas. <br/><br/> Ao longo dos anos entendi que é importante trazer a memória afetiva do cliente para esse novo lar e desde então me dedico intensamente a criar lares que emocionam. <br/><br/> Isso aconteceu comigo também! Todas as férias eu ia para casa da minha avó, uma casa simples, mas na sala dela existiam duas poltronas e um sofá clássicos. Eu ficava encantada com os capitonê, o couro, que as poltronas tinham, daí surge minha paixão pelo clássico(Graças a vovó!! Kkk) Hoje o clássico me serve como base das criações, mas acrescento uma pitada de contemporâneo. É o que eu chamo de “estilo clássico-contemporâneo” que aplico em meus projetos.</div>
                        <img  className="photosSobre" src="../../images/Sobre/Hellen_photo1.webp" alt="Hellen one"/>
                    </div>
                    <div className="sobreContentRow">
                        <img  className="photosSobre" src="../../images/Sobre/Hellen_photo2.webp" alt="Hellen two" />
                        <div className="textSobre">Mas vamos destacar aqui duas coisas que não abro mão: praticidade e identidade, que, para mim, estão nos detalhes! Sou uma pessoa observadora, com o olhar treinado! Gosto de fazer uma leitura das pessoas antes de começar qualquer projeto, porque assim consigo transmitir o que o cliente realmente precisa. Sempre vou bater na tecla que o nosso comportamento, roupas, como falamos, para onde gostamos de viajar e descansar mostram mais da gente do que o podemos imaginar, e, para conseguir entender essa linguagem não verbal, me aprofundei no estudo de coach, comportamento e conexão! Em cada reunião, vamos trazendo CLAREZA e construindo o que realmente o cliente quer e precisa dentro de casa. Projetos únicos que conectam e emocionam!</div>
                    </div>
                    <img className="logo"src="../../images/interior_logo.webp" alt=""/>
                </div>
            </div>
        </>
    )
}; 
 export default Sobre;