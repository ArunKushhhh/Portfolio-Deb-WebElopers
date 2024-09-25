import { useState, useEffect } from "react";
import DWlogo from "../assets/DWlogo.svg";

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false); // State to manage overlay visibility

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen); // Toggle overlay visibility
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOverlayOpen) {
        setIsOverlayOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOverlayOpen]);

  return (
    <div className="w-[100%] flex justify-between items-center px-4 py-4 relative bg-[#1a1a1a]">
      {/* Logo */}
      <div className="w-[122px] cursor-pointer" onClick={() => window.scrollTo(0, 0)} >
        <img src={DWlogo} alt="logo" className="" />
      </div>

      {/* Nav Bar */}
      <div className="hidden md:flex">
        <ul className="flex gap-5">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="">Resume</a></li>
        </ul>
      </div>

      {/* Contact Us Button and Hamburger */}
      <div className="flex gap-5">
        {/* Contact Us */}
        <div>
          <a href="#contact">
          <button className="border border-1 px-4 py-2 rounded-lg border-[#4FC3F7] text-sm">
            Contact Us
          </button>
          </a>
        </div>
        {/* Hamburger */}
        <div className="w-6 flex flex-col gap-1 justify-center cursor-pointer md:hidden" onClick={toggleOverlay}>
          <div className="w-3 h-[3px] bg-white"></div>
          <div className="w-6 h-[2px] bg-white"></div>
          <div className="w-3 h-[3px] bg-white self-end"></div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center">
          <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleOverlay}>
            <span className="text-white text-4xl">&times;</span> {/* X icon */}
          </div>
          <ul className="flex flex-col gap-5 text-white text-lg">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="">Resume</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
