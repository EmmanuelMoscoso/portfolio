"use client";
import Image from "next/image";
import { MouseEvent } from "react";

export default function Navbar() {
  
  const handleScroll = (
      e: React.MouseEvent<HTMLAnchorElement>,
      targetId: string
  ) => {
    e.preventDefault(); 
    
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full flex justify-center py-6 fixed top-0 bg-navbar-color backdrop-blur-sm z-50">
      <nav className="w-[65%] flex justify-between items-center font-mono text-sm">
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, 'home')}
          className="hover:opacity-80 transition-opacity"
        >
          <Image
            src="/assets/icon.png"
            alt="logo"
            width={40}
            height={40}
            priority
            />
        </a>


        <ul className="flex gap-8 text-olive-400">
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, 'about')}
              className="hover:text-light-accents transition-colors cursor-pointer"
            >
              Sobre mi
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, 'projects')}
              className="hover:text-light-accents transition-colors cursor-pointer"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="hover:text-light-accents transition-colors cursor-pointer"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}