import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./component/Navbar/navbar";
import Footer from "./component/Footer/footer"
import Home from "./component/Pages/Home/home";
import Interior from "./component/Pages/Interiores/interiores";
import Sobre from "./component/Pages/Sobre/sobre";
import Arquitetura from "./component/Pages/Arquitetura/arquitetura";
import O_Escritorio from "./component/Pages/O_Escritorio/Escritorio";
import Lavabo from "./component/Pages/Interiores/Lavabo/lavabo";
import AreaGourmet from "./component/Pages/Interiores/Area_Gourmet/areaGourmet";





const PagesRoutes = () => {
    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/interiores" element={<Interior/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/Arquitetura" element={<Arquitetura/>}/>
                <Route path="/Escritório" element={<O_Escritorio/>}/>
                <Route path="/Gourmet" element={<AreaGourmet/>}/>
                <Route path="/lavabo" element={<Lavabo/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default PagesRoutes;