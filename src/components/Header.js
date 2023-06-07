import React from "react";
import logo from "./../img/logo.png";

function Header() {
  const styledHeader ={
    height: '170px'
  }
  return (
    <>
      {/* <h1>CENTRAL PERK</h1> */}
      {<img className="logo" src={logo} alt="logo picture"/>}
    </>
  );
}

export default Header;