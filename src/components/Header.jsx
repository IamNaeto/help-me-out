import React from "react";

const Header = () => {
    return ( 
        <nav className="py-5 px-5% flex items-center justify-between bg-brand-white fixed w-full z-5 shadow-md">
            <div>
                <img src="./img/logo-clr.png" alt="" />
            </div>

            <div className="">
                <a href="" className="decoration-none pr-4 text-brand-dark font-500">Features</a>
                <a href="" className="decoration-none text-brand-dark font-500">How It Works</a>
            </div>

            <a href="" className="decoration-none text-brand-blue text-5 font-600">Get Started</a>
        </nav>
     );
}
 
export default Header;