import React from "react";
import Navbar from "./Navbar";
import Shapes from "./Shapes";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <header>
      <Navbar />
      <Shapes />
      <HeaderContent/>
    </header>
  );
};

export default Header;
