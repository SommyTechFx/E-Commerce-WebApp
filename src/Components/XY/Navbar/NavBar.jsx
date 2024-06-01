// import { useState } from "react";
import "./NavBar.css";
import Home from "../../../Components/XY/Navbar/NavComponents/Home";
import Shop from "../../../Components/XY/Navbar/NavComponents/Shop";
import About from "../../../Components/XY/Navbar/NavComponents/About";
import Blog from "../../../Components/XY/Navbar/NavComponents/Blog";
import Contact from "../../../Components/XY/Navbar/NavComponents/Contact";
import Pages from "../../../Components/XY/Navbar/NavComponents/Pages";
import LoginSet from "./NavbarLogin/LoginSet";
function NavBar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);

  return (
    <div className="Nav-bar-section">
      <div className="brand-name">
        <h3>Bandage</h3>
      </div>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        <div>
          <Home />
        </div>
        <div>
          <Shop />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Blog />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Pages />
        </div>
      </div>

      <div>
        <LoginSet />
      </div>
    </div>

    // <nav className="navbar">
    //   <div className="navbar-logo">
    //     <h3>Bandage</h3>
    //   </div>

    //   <div className="bingo">
    //     <Home />
    //     <Shop />
    //     <About />
    //     <Blog />
    //     <Contact />
    //     <Pages />
    //     <div className="bingo2">
    //       <LoginSet />
    //     </div>
    //   </div>
    //   <div className={`navbar-links ${isOpen ? "open" : ""}`}>
    //     <div>
    //       <p>Products</p>
    //     </div>
    //   </div>
    //   <div className="navbar-toggle" onClick={toggleMenu}>
    //     <span className="bar"></span>
    //     <span className="bar"></span>
    //     <span className="bar"></span>
    //   </div>
    // </nav>
  );
}

export default NavBar;
