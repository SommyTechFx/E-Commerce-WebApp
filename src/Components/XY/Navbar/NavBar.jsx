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

  // const navigate = useNavigate();

  // const navigateToPage2 = () => {
  //   navigate("/profile");
  // };
  // const navigateToPage2 = () => {
  //   navigate("/home");
  // };

  return (
    <div className="Nav">
      <ul className="Nav-wrapper">
        <li className="Nav-logo">
          <Link className="Link" to="/">
            Bandage
          </Link>
        </li>
        <li className="Nav-Element">
          <NavLink className="Link">
            <Home to="/" />
          </NavLink>
        </li>

        <liv className="Nav-Element">
          <NavLink className="Link">
            <Shop to="/page2" />
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
            <Pages />
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
