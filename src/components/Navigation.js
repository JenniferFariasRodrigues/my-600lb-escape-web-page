import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/motivacao">Motivação</NavLink>
        </li>
        <li>
          <NavLink to="/sobre">Sobre o jogo</NavLink>
        </li>
        <li>
          <NavLink to="/galeria">Galeria VIP</NavLink>
        </li>
        <li>
          <NavLink to="/contato">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
