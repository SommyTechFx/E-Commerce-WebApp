// import React from 'react'
import "../MainPage3/MainPage3.css";
import Arrow from "../../../assets/Images3/Arrow.png";
import "./Slidepg3.css";

function Slidepg3() {
  return (
    <>
      <div className="Directory">
        <p>Home </p>
        <img src={Arrow} alt="arrow" />
        <p>
          <span>Shop</span>
        </p>
        <img src={Arrow} alt="arrow" />
        <p>
          <span> Shopping Cart</span>
        </p>
      </div>
      <div className="shopping-cart-spacing">
        <div className="Add-to-cart">
          <div className="wrapping-cart-div1">
            <div className="shopping-cart-name">
              <h3>Shopping Cart</h3>
            </div>
            <div className="background-dark-sec">
              <p>Item Details</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
          </div>

          {/* <div>
          <div className="Page1-div">
            <img src={PC9} alt="arrow" />
          </div>
        </div> */}
        </div>

        <div className="Add-to-payment">
          <h3>Order Summary</h3>
        </div>
      </div>
    </>
    // </div>
  );
}

export default Slidepg3;
