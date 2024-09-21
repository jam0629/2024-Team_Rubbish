import React from "react";
import "./Footer.css";
import Button from "./Button";

const Footer = ({ buttonText, buttonColor, onButtonClick }) => {
    return (
        <footer>
            <Button 
                text={buttonText} 
                color={buttonColor} 
                onClick={onButtonClick} 
            />
        </footer>
    );
};

export default Footer;