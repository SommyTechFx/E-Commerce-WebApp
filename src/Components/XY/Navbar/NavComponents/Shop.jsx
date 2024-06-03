// import React from 'react'

import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();

  // const navigateToPage2 = () => {
  //   navigate("/profile");
  // };
  const navigateToPage3 = () => {
    navigate("/page2");
  };
  return (
    <div>
      <h4
        onClick={navigateToPage3}
        style={{
          fontFamily: "Montserrat",
          fontWeight: "700",
          fontSize: "1.4rem",
          lineHeight: "2.4rem",
          color: "rgba(115, 115, 115, 1)",
          alignItems: "center",
        }}
      >
        Shop
      </h4>
    </div>
  );
}

export default Shop;
