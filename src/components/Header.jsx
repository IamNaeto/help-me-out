import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Check if the current route is "/Auth" or "/Repo"
  const isAuthRoute = location.pathname === "/Auth";
  const isVideosRepoRoute = location.pathname === "/VideosRepo";
  const isVideoRepoRoute = location.pathname === "/VideoRepo";

  return (
    <nav
      className={`py-5 px-5% flex items-center justify-between bg-brand-white fixed w-full z-5 ${
        isAuthRoute || isVideosRepoRoute || isVideoRepoRoute ? "" : "shadow-md"
      }`}
    >
      <Link to="/">
        <img src="./img/logo-clr.png" alt="" />
      </Link>

      {(isVideosRepoRoute || isVideoRepoRoute) && (
        <div className="flex items-center justify-between">
            <span className="i-mdi-account-circle inline-block text-8 text-brand-litedark"/>
            <p className="text-4 mx-2">John Mark</p>
            <span className="i-mdi-arrow-down-drop-circle inline-block text-8 text-brand-litedark cursor-pointer"/>
        </div>
      )}

      {!isAuthRoute && !isVideosRepoRoute && !isVideoRepoRoute && (
        <div className="links">
          <a
            href="#Features"
            className="decoration-none pr-4 text-brand-dark font-500 hover-text-brand-blue transition-all transition-1"
          >
            Features
          </a>
          <a
            href="#HowItWorks"
            className="decoration-none text-brand-dark font-500 hover-text-brand-blue transition-all transition-1"
          >
            How It Works
          </a>
        </div>
      )}

        {!isAuthRoute && !isVideosRepoRoute && !isVideoRepoRoute &&(
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
