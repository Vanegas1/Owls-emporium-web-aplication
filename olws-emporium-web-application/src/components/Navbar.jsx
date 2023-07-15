import logo from "../assets/logo.jpeg";
import "../index.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState("bg-blue-900");
  const [navbarTextColor, setNavbarTextColor] = useState("text-white");
  const [navbarShadow, setNavbarShadow] = useState("shadow");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        setNavbarBackground("bg-white");
        setNavbarTextColor("text-blue-950");
        setNavbarShadow("shadow-md");
      } else {
        setNavbarBackground("bg-blue-900");
        setNavbarTextColor("text-white");
        setNavbarShadow("shadow-none");
      }
    };

    handleScroll(); // Llamar a la función una vez al cargar la página para establecer el estado inicial

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10">
      <header
        className={`body-font ${navbarShadow}  ${navbarBackground} transition-colors duration-300`}
      >
        <div className="container mx-auto flex flex-wrap py-5 lg:px-32 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <img src={logo} alt="logo" className="w-[48px]" />
            <span className={`ml-3 text-xl font-bold ${navbarTextColor}`}>
              Olws Emporium
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">
            <a
              className={`mr-5 cursor-pointer hover:underline ${navbarTextColor}`}
            >
              Home
            </a>
            <a
              className={`mr-5 cursor-pointer hover:underline ${navbarTextColor}`}
            >
              About
            </a>
            <a
              className={`mr-5 cursor-pointer hover:underline ${navbarTextColor}`}
            >
              API
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
