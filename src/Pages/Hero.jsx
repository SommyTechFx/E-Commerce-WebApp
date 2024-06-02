import TopInfo from "../Components/XY/TopInfo/TopInfo";
import "./Hero.css";
import NavBar from "../Components/XY/Navbar/NavBar";
import MainPage from "../Components/XY/MainPage/MainPage";
import { useState } from "react";
import Dropdown from "../Components/XY/Navbar/Dropdown";

function Hero() {
  const [clicked, isClicked] = useState(false);
  return (
    <div>
      <TopInfo />
      <NavBar clicked={clicked} isClicked={isClicked} />{" "}
      {clicked ? <Dropdown /> : null}
      <MainPage />
    </div>
  );
}

export default Hero;
