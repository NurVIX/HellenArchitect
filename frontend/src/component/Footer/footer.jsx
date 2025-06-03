import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './footer.css'

const Footer = () => {
return (
    <footer className="footer">
        <div className="footer-container">
            <div className="Socialscontainer">
                <div className="SocialTitle-space">
                    <div className="socialsTitle">Social</div>
                    <a href="https://www.instagram.com/hellenrochaarquitetura/" target="blank" >
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="rightsreserve-container">
                <div className="rightsreserve">All rights reserved. Website built by NurVIX</div>
            </div>
        </div>
    </footer>
    );

};

export default Footer;