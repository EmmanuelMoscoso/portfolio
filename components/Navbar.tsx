"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (
      e: React.MouseEvent<HTMLAnchorElement>,
      targetId: string
  ) => {
    e.preventDefault(); 
    setIsOpen(false);
    
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full flex justify-center py-4 md:py-6 fixed top-0 bg-navbar-color/90 backdrop-blur-md z-50 border-b border-gray-olive/30">
      <nav className="w-full max-w-5xl px-6 flex justify-between items-center font-mono text-sm relative">
        
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, 'home')}
          className="hover:opacity-80 transition-opacity z-50"
        >
          <Image
            src="/assets/icon.png"
            alt="logo"
            width={40}
            height={40}
            priority
          />
        </a>

        <ul className="hidden md:flex gap-8 text-olive-400">
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-light-accents transition-colors cursor-pointer">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-light-accents transition-colors cursor-pointer">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-light-accents transition-colors cursor-pointer">
              Contacto
            </a>
          </li>
        </ul>

        <button 
          className="md:hidden text-olive-400 hover:text-light-accents z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        <div className={`absolute top-16 left-0 w-full bg-navbar-color/95 backdrop-blur-md md:hidden flex flex-col items-center py-8 gap-8 transition-all duration-300 border-b border-gray-olive shadow-xl ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-olive-400 hover:text-light-accents transition-colors cursor-pointer text-lg">
            Sobre mí
          </a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-olive-400 hover:text-light-accents transition-colors cursor-pointer text-lg">
            Proyectos
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-olive-400 hover:text-light-accents transition-colors cursor-pointer text-lg">
            Contacto
          </a>
        </div>

      </nav>
    </header>
  );
}