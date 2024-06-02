import LoginSet from "../NavbarLogin/LoginSet";
import "./Dropdown2.css";
import { NavLink } from "react-router-dom";
function menu() {
  return (
    <div className="Navbars">
      <ul className="Navbar-wrapper">
        <li className="Navbar-Element">
          <NavLink className="Link" to="/Home.jsx">
            Home
          </NavLink>
        </li>
        <li className="Navbar-Element">
          <NavLink className="Link" to="/product">
            Shop
          </NavLink>
        </li>

        <li className="Navbar-Element">
          <NavLink className="Link" to="/Pricing">
            About
          </NavLink>
        </li>

        <li className="Navbar-Element">
          <NavLink className="Link" to="/Contact">
            Blog
          </NavLink>
        </li>
        <li className="Navbar-Element">
          <NavLink className="Link" to="/Contact">
            Contact
          </NavLink>
        </li>
        <li className="Navbar-Element">
          <NavLink className="Link" to="/Contact">
            Pages
          </NavLink>
        </li>
        <li className="Navbar-Element">
          <NavLink className="Link" to="/Contact">
            <LoginSet />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default menu;
