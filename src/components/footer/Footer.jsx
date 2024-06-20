
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/contentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="title">
                    Welcome to Movimania!!
                </div>
                <div className="infoText">
                    This site does not store any files on our server, we only show content linked to the media which is hosted by 3rd party services.
                </div>
                <div className="infoText">
                    Copyright Movimania 2024
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
