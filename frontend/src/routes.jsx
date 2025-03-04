import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./component/Navbar/navbar";
import Footer from "./component/Footer/footer"
import Home from "./component/Pages/Home/home";
import Interior from "./component/Pages/Interiores/interiores";
import Quartos from "./component/Pages/Quartos/quartos";


const PagesRoutes = () => {
    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/interiores" element={<Interior/>}/>
                <Route path="/quartos" element={<Quartos/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
};

export default PagesRoutes;