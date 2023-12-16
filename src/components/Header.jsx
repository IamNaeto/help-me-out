import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();

  // Check if the current route is "/Auth" or "/Repo"
  const isAuthRoute = location.pathname === "/Auth";
  const isVideosRepoRoute = location.pathname === "/VideosRepo";
  const isVideoRepoRoute = location.pathname === "/VideoRepo";
  const isRecordReady = location.pathname === "/RecordReady";

  // Manage visibility of nav menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Control nav hide and show
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`py-5 px-5% flex items-center justify-between bg-brand-white fixed w-full z-5 ${isAuthRoute || isVideosRepoRoute || isVideoRepoRoute || isRecordReady ? "" : "shadow-md"
        }`}
    >
      <Link to="/">
        <img src="./img/logo-clr.png" alt="" />
      </Link>




      <header className={`${isMenuOpen ? 'flex' : 'hidden'} absolute md:relative top-21 left-0 md:top-auto md:left-auto md:flex md:flex-row flex-col items-center justify-between w-full md:w-[60%] p-6 md:p-0 bg-brand-blue md:bg-transparent gap-5 md:gap-0`}>
        {(isVideosRepoRoute || isVideoRepoRoute) && (
          <div className="w-full flex items-center md:items-end justify-center md:justify-end">
            <div className="flex items-center justify-between relative">
              <span className="i-mdi-account-circle inline-block text-8 text-white md:text-brand-litedark" />
              <p className="text-4 mx-2 text-white md:text-black">John Mark</p>
              <span className="i-mdi-arrow-down-drop-circle inline-block text-8 text-white md:text-brand-litedark cursor-pointer" />
            </div>
          </div>
        )}

        {!isAuthRoute && !isVideosRepoRoute && !isVideoRepoRoute && (
          <div className="links flex flex-col md:flex-row items-center gap-4 ">
            <a
              href="#Features"
              className="decoration-none pr-4 text-white md:text-brand-dark font-500 hover:text-gray-300 md:hover-text-brand-blue transition-all transition-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#HowItWorks"
              className="decoration-none text-white md:text-brand-dark font-500 hover:text-gray-300 md:hover-text-brand-blue transition-all transition-1"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
          </div>
        )}

        {!isAuthRoute && !isVideosRepoRoute && !isVideoRepoRoute && (
          <Link
            to="/Auth"
            className="decoration-none text-white md:text-brand-blue text-5 font-600 p-3 transition-all hover:bg-white md:hover:bg-brand-blue hover:rounded-md hover-text-brand-blue md:hover-text-brand-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        )}
      </header>
      {!isAuthRoute && (
        isMenuOpen ? (
          <span className="i-mdi-close inline-block text-4xl text-brand-blue md:hidden cursor-pointer" onClick={toggleMenu} />
        ) : (
          <span className="i-mdi-menu inline-block text-4xl text-brand-blue md:hidden cursor-pointer" onClick={toggleMenu} />
        )
      )}


    </nav>
  );
};

export default Header;
