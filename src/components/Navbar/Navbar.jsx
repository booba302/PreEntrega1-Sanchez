import React from "react";
import logo from "../../img/logo.png";
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  return (
    <div class="navbar">
      <div class="logo">
        <img src={logo} alt="" />
      </div>
      <div class="actions">
        <a class="act-button" href="#">Inicio</a>
        <a class="act-button" href="#">Servicios</a>
        <a class="act-button" href="#">Contacto</a>
      </div>
      <CartWidget />
    </div>
  );
}

export default Navbar;
