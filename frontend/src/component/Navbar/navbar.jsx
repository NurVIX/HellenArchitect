import React, { useState } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    const isMainPage = location.pathname === '/';

// creating the state for the menu

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

return (
    <nav className='navbar'>
         <div className='LinksContainer'>
            
            {/* creating menu for desktop*/}
            <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                <li><Link to='/Arquitetura' onClick={() => setIsOpen(false)}>Arquitetura</Link></li>
                <li><Link to='/Interiores' onClick={() => setIsOpen(false)}>Interiores</Link></li>
                <li><Link to='/Pousada' onClick={() => setIsOpen(false)}>Pousada</Link></li>
                <li><Link to='/Escritório' onClick={() => setIsOpen(false)}>Escritório</Link></li>
                <li><Link to='/Mostras' onClick={() => setIsOpen(false)}>Mostras</Link></li>
                <li><Link to='/Sobre' onClick={() => setIsOpen(false)}>Sobre</Link></li>
            </ul>
            {/* creating a dropdown for mobile or tablet*/}
            <button className='dropdownMenuIcon' onClick={toggleMenu}>☰</button>
        </div>
        <div className='navbarcontainer'>
            <div className='LogoSpace'>
                {isMainPage ? (
                    <img className='LogoImageMain' src={'/images/full_Logo.webp'} alt = "Logo"/>
                ) : ( < Link to='/' onClick={() => setIsOpen(false)}> <img className='LogoImage' src={'/images/logo_cinza.webp'} alt = "HellenLogo"/> </Link>)}    
            </div>
        </div>
        
    </nav>
    );
};

export default Navbar;