// import { useState } from "react";
import "./NavBar.css";
import Home from "../../../Components/XY/Navbar/NavComponents/Home";
import Shop from "../../../Components/XY/Navbar/NavComponents/Shop";
import About from "../../../Components/XY/Navbar/NavComponents/About";
import Blog from "../../../Components/XY/Navbar/NavComponents/Blog";
import Contact from "../../../Components/XY/Navbar/NavComponents/Contact";
import Pages from "../../../Components/XY/Navbar/NavComponents/Pages";
import LoginSet from "./NavbarLogin/LoginSet";
import { Link, NavLink } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";

import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";
function NavBar({ clicked, isClicked }) {
  NavBar.propTypes = {
    clicked: PropTypes.bool.isRequired,
    isClicked: PropTypes.func.isRequired,
  };
  const handleClicked = () => {
    isClicked(!clicked);
  };

  return (
    <div className="Nav">
      <ul className="Nav-wrapper">
        <li className="Nav-logo">
          <Link className="Link">Bandage</Link>
        </li>
        <li className="Nav-Element">
          <NavLink className="Link">
            <Link className="Link" to="/">
              <Home />
            </Link>
          </NavLink>
        </li>

        <liv className="Nav-Element">
          <NavLink className="Link">
            <Link className="Link" to="/page2">
              <Shop />
            </Link>
          </NavLink>
        </liv>

        <li className="Nav-Element">
          <NavLink className="Link">
            <About />
          </NavLink>
        </li>

        <li className="Nav-Element">
          <NavLink className="Link">
            <Blog />
          </NavLink>
        </li>

        <li className="Nav-Element">
          <NavLink className="Link">
            <Contact />
          </NavLink>
        </li>
        <li className="Nav-Element">
          <NavLink className="Link">
            <Link className="Link">
              <Pages to="/page2" />
            </Link>
          </NavLink>
        </li>

        <li className="Nav-Button">
          <NavLink className="Link">
            <LoginSet />
          </NavLink>
        </li>
      </ul>
      {!clicked ? (
        <GiHamburgerMenu onClick={handleClicked} className="icon" />
      ) : (
        <ImCross onClick={handleClicked} className="icon" />
      )}
    </div>
  );
}

export default NavBar;
