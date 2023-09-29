import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Check if the current route is "/Auth"
  const isAuthRoute = location.pathname === "/Auth";

  return (
    <nav
      className={`py-5 px-5% flex items-center justify-between bg-brand-white fixed w-full z-5 ${
        isAuthRoute ? "" : "shadow-md"
      }`}
    >
      <Link to="/">
        <img src="./img/logo-clr.png" alt="" />
      </Link>

      {!isAuthRoute && (
        <div className="links">
          <a
            href=""
            className="decoration-none pr-4 text-brand-dark font-500 hover-text-brand-blue transition-all transition-1"
          >
            Features
          </a>
          <a
            href=""
            className="decoration-none text-brand-dark font-500 hover-text-brand-blue transition-all transition-1"
          >
            How It Works
          </a>
        </div>
      )}

      {!isAuthRoute && (
        <Link
          to="/Auth"
          className="decoration-none text-brand-blue text-5 font-600"
        >
          Get Started
        </Link>
      )}
    </nav>
  );
};

export default Header;
