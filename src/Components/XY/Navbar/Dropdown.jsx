import "./Dropdown.css";
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
            Product
          </NavLink>
        </li>

        <li className="Navbar-Element">
          <NavLink className="Link" to="/Pricing">
            Pricing
          </NavLink>
        </li>

        <li className="Navbar-Element">
          <NavLink className="Link" to="/Contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default menu;
