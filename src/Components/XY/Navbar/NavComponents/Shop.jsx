// import React from 'react'

import { useState } from "react";

function Shop() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label
        style={{
          outline: "none",
          border: "none",
          fontFamily: "Montserrat",
        }}
        htmlFor="fruits"
      ></label>
      <select
        style={{
          outline: "none",
          border: "none",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        id="fruits"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">Shop</option>
        <option value="Shopping Cart">Shopping Cart</option>
      </select>
      {selectedValue && <p>Home : {selectedValue}</p>}
    </div>
  );
}

export default Shop;
