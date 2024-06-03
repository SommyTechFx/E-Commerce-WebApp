import "./Dropdown.css";
import { Link, NavLink } from "react-router-dom";
function menu() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="Navbars">
      <ul className="Navbar-wrapper">
        <li className="Navbar-Element">
          <NavLink className="Link">
            <Link className="Link" to="/page1">
              Home
            </Link>
          </NavLink>
        </li>
        <li className="Navbar-Element">
          <NavLink className="Link" onClick={() => scrollToSection("product")}>
            Product
          </NavLink>
        </li>

        <li className="Navbar-Element">
          <NavLink className="Link" onClick={() => scrollToSection("product")}>
            Pricing
          </NavLink>
        </li>

        <li className="Navbar-Element">
          <NavLink className="Link" onClick={() => scrollToSection("contact")}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default menu;
