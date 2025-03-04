import React from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    const isMainPage = location.pathname === '/';


return (
    <nav className='navbar'>
        <div className='navbarcontainer'>
            <div className='LogoSpace'>
                {isMainPage ? (
                    <img className='LogoImageMain' src={'/images/full_Logo.webp'} alt = "Logo"/>
                ) : ( <img className='LogoImage' src={'/images/logo_cinza.webp'} alt = "HellenLogo"/> )}    
            </div>
            
            <ul className='navbar-links dropdownbox'>
                <li><Link to='/Arquitetura'>Arquitetura</Link></li>
                <li><Link to='/Interiores'>Inteiores</Link></li>
                <li><Link to='/Escritório'>Escritório</Link></li>
                <li><Link to='/Mostras'>Mostras</Link></li>
                <li><Link to='/Sobre'>Sobre</Link></li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;