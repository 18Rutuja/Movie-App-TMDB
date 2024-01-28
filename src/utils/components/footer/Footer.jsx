import React, { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    let media = "https://www.linkedin.com/in/rutuja-rathod-015206231"
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    {/* <li className="menuItem">Terms Of Use</li> */}
                    {/* <li className="menuItem">Privacy-Policy</li> */}
                    <li className="menuItem">About</li>
                    {/* <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li> */}
                </ul>
                <div className="infoText">
                   Made by Rutuja
                </div>
                <div className="socialIcons">
            
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin 
                        onClick={media}/>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;