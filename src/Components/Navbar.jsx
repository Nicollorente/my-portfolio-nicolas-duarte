import React from "react";
import { useState } from "react";
import { Icon } from "@chakra-ui/react"; 
import { HamburgerIcon } from "@chakra-ui/icons"
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import HamburgerIcon from "./HamburgerIcon";


const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

//   const changeTab = (value) => {
//     dispatch(changeTabActive(value));
//   };

  return (
    <header>
      <nav className={`links ${clicked ? 'active' : ''}`}>
        <ul>
            <li><a href="#inicio"  onClick={handleClick}>Inicio</a></li>
            <li><a href="#habilidades"  onClick={handleClick}>Habilidades</a></li>
           <li> <a href="#proyectos"  onClick={handleClick}>Proyectos</a></li>
           <li><a href="#contacto"  onClick={handleClick}>Contacto</a></li>
        </ul>
      </nav>
       <div className="icon-bar" >
        <Icon as={HamburgerIcon}/>
      </div> 
    </header>
  );
};

export default Navbar;
