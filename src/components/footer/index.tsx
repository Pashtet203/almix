import React from 'react';
import cl from "./footer.module.css"
import FeedBackForm from "../feedBackForm";

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <FeedBackForm/>
        </footer>
    );
};

export default Footer;