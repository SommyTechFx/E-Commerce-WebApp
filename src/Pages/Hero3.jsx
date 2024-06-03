// import React from 'react'
import "./Hero3.css";
import TopInfo from "../Components/XY/TopInfo/TopInfo";
import NavBar from "../Components/XY/Navbar/NavBar";
import MainPage3 from "../Components/XY/MainPage3/MainPage3";
import Dropdown2 from "../Components/XY/Navbar/NavComponents/Dropdown2";
import { useState } from "react";

function Hero3() {
  const [clicked, isClicked] = useState(false);
  return (
    <div>
      <TopInfo />
      <NavBar clicked={clicked} isClicked={isClicked} />
      {clicked ? <Dropdown2 /> : null}

      <MainPage3 />
    </div>
  );
}

export default Hero3;
