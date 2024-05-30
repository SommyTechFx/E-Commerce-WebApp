import "./NavBar.css";
import Home from "../../../Components/XY/Navbar/NavComponents/Home";
import Shop from "../../../Components/XY/Navbar/NavComponents/Shop";
import About from "../../../Components/XY/Navbar/NavComponents/About";
import Blog from "../../../Components/XY/Navbar/NavComponents/Blog";
import Contact from "../../../Components/XY/Navbar/NavComponents/Contact";
import Pages from "../../../Components/XY/Navbar/NavComponents/Pages";
import LoginSet from "./NavbarLogin/LoginSet";
function NavBar() {
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
  );
}

export default NavBar;
