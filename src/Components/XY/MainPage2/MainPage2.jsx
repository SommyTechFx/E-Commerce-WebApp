// import React from 'react'
import "./MainPage2.css";
import Arrow from "../../../assets/Images3/Arrow.png";
import PC9 from "../../../assets/Images2/PC9.png";
import XYimage from "../../../assets/Images1/XYimage.png";
import Slide2 from "../MainPage/MainPageSlides/Slide2";
import Icon1 from "../../../assets/Images4/Icon1.png";
import Icon2 from "../../../assets/Images4/Icon2.png";
import Icon3 from "../../../assets/Images4/Icon3.png";
import Icon4 from "../../../assets/Images4/Icon4.png";
import Icon5 from "../../../assets/Images4/Icon5.png";
import Icon6 from "../../../assets/Images4/Icon6.png";

import Footer from "./Footer";
function MainPage2() {
  return (
    <div className="MainPage">
      <div className="Page1">
        <div className="Directory">
          <p>Home </p>
          <img src={Arrow} alt="arrow" />
          <p>
            <span>Shop</span>
          </p>
        </div>

        <div>
          <div className="Page1-div">
            <img src={PC9} alt="arrow" />
          </div>
        </div>
      </div>

      <div className="Page2-div1">
        <p>Description</p>
        <p>Additional Information</p>
        <p>Reviews(0)</p>
      </div>
      <hr />
      <div className="Page2">
        <div className="Page2-div1-text-img">
          <div className="Page-div1-text">
            <h5>the quick fox jumps over </h5>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div>
            <img src={XYimage} alt="pic" />
          </div>
        </div>
      </div>

      <div className="Page3">
        <h3>BESTSELLER PRODUCTS</h3>
        <Slide2 />

        <div className="Icons">
          <p>
            <img src={Icon1} alt="icons" />
          </p>

          <p>
            {" "}
            <img src={Icon2} alt="icons" />
          </p>
          <p>
            <img src={Icon3} alt="icons" />
          </p>
          <p>
            <img src={Icon4} alt="icons" />
          </p>
          <p>
            <img src={Icon5} alt="icons" />
          </p>
          <p>
            <img src={Icon6} alt="icons" />
          </p>
        </div>
      </div>

      <div className="Page4">
        <Footer />
      </div>
    </div>
  );
}

export default MainPage2;
