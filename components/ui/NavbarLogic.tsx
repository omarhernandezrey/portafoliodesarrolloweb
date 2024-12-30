"use client";

import React, { useState, useEffect } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const NavbarLogic = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia a mobile si la pantalla es menor o igual a 768px
    };

    handleResize(); // Detecta el tamaño inicial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <NavbarMobile isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      ) : (
        <NavbarDesktop />
      )}
    </>
  );
};

export default NavbarLogic;
