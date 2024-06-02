// import React from 'react'
import TopInfo from "../Components/XY/TopInfo/TopInfo";
import "./Hero2.css";
import NavBar from "../Components/XY/Navbar/NavBar";
import MainPage2 from "../Components/XY/MainPage2/MainPage2";
import { useState } from "react";
import Dropdown2 from "../Components/XY/Navbar/NavComponents/Dropdown2";

function Hero2() {
  const [clicked, isClicked] = useState(false);
  return (
    <div>
      <TopInfo />
      <NavBar clicked={clicked} isClicked={isClicked} />
      {clicked ? <Dropdown2 /> : null}
      <MainPage2 />
    </div>
  );
}

export default Hero2;
