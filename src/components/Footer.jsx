import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="px-5% pt-10% pb-5% grid grid-cols-4 gap-4 bg-brand-blue text-brand-white">
            <Link to="/">
                <img src="./img/logo-white.png" alt="" />
            </Link>

            <div className="grid grid-cols-1 gap-4 [&>a]:decoration-none [&>a]:text-brand-white">
                <h3>Home</h3>
                <a href="" className="hover-text-brand-litedark transition-all transition-1">Home</a>
                <a href="" className="hover-text-brand-litedark transition-all transition-1">Converter</a>
                <a href="" className="hover-text-brand-litedark transition-all transition-1">How it Works</a>
            </div>

            <div className="grid grid-cols-1 gap-4 [&>a]:decoration-none [&>a]:text-brand-white">
                <h3>About Us</h3>
                <a href="" className="hover-text-brand-litedark transition-all transition-1">About</a>
                <a href="" className="hover-text-brand-litedark transition-all transition-1">Contact Us</a>
                <a href="" className="hover-text-brand-litedark transition-all transition-1">Privacy Policy</a>
            </div>

            <div className="grid grid-cols-1 gap-4 [&>a]:decoration-none [&>a]:text-brand-white">
                <h3>Screen Record</h3>
                <a href="" className="hover-text-brand-litedark transition-all transition-1">Browser Window</a>
                <a href="" className="hover-text-brand-litedark transition-all transition-1">Desktop</a>
                <a href="" className="hover-text-brand-litedark transition-all transition-1">Application</a>
            </div>
        </footer>
     );
}
 
export default Footer;