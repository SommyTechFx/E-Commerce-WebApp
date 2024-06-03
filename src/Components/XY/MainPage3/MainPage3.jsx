// import React from 'react'
import "./MainPage3.css";
import Arrow from "../../../assets/Images3/Arrow.png";
import PC9 from "../../../assets/Images2/PC9.png";
import Slide2 from "../MainPage/MainPageSlides/Slide2";
import Slide7 from "../MainPage/MainPageSlides/Slide7";

function MainPage3() {
  return (
    <div>
      <div className="Page1">
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

        <div>
          <div className="Page1-div">
            <img src={PC9} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="Page3">
        <h3>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
        <Slide2 />
      </div>

      <div>
        <Slide7 />
      </div>
    </div>
  );
}

export default MainPage3;
