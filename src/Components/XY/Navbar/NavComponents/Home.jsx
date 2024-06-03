// import React from 'react'

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // const navigateToPage2 = () => {
  //   navigate("/profile");
  // };
  const navigateToPage2 = () => {
    navigate("/page1");
  };
  return (
    <div>
      <h4
        onClick={navigateToPage2}
        style={{
          fontFamily: "Montserrat",
          fontWeight: "700",
          fontSize: "1.4rem",
          lineHeight: "2.4rem",
          color: "rgba(115, 115, 115, 1)",
          alignItems: "center",
        }}
      >
        Home
      </h4>
    </div>
  );
}

export default Home;
