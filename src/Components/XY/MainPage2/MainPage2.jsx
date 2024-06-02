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
import StarIconFill from "../../../assets/Images3/StarIconFill.png";
import StarIconE from "../../../assets/Images3/StarIconE.png";
import Footer from "./Footer";
import Ellipse1 from "../../../assets/Images4/Ellipse1.png";
import Ellipse2 from "../../../assets/Images4/Ellipse2.png";
import Ellipse3 from "../../../assets/Images4/Ellipse3.png";
import Ellipse4 from "../../../assets/Images4/Ellipse4.png";
import love1 from "../../../assets/Images4/love1.png";
import Cart1 from "../../../assets/Images4/Cart1.png";
import eye1 from "../../../assets/Images4/eye1.png";
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

        <div className="product-view">
          <div className="Page1-div">
            <img src={PC9} alt="arrow" />
          </div>
          <div className="product-details">
            <h4>Floating Phone</h4>
            <div>
              <img src={StarIconFill} alt="arrow" />
              <img src={StarIconFill} alt="arrow" />
              <img src={StarIconFill} alt="arrow" />
              <img src={StarIconFill} alt="arrow" />
              <img src={StarIconE} alt="arrow" />
              &nbsp;&nbsp; 10 Reviews
            </div>
            <div className="price-details">
              <h3>$1,139.33</h3>
              <h6>
                <span>Availability :</span>In Stock
              </h6>
            </div>
            <hr className="line-hr2" />
            <div className="chose-colors">
              <div className="color-div">
                <img src={Ellipse1} alt="color-circles" />
                <img src={Ellipse2} alt="color-circles" />
                <img src={Ellipse3} alt="color-circles" />
                <img src={Ellipse4} alt="color-circles" />
              </div>
            </div>
            <div className="button-Icons">
              <div>
                <button>Select Options</button>
              </div>

              <div className="icons-sec">
                <img src={love1} alt="icons" />
                <img src={Cart1} alt="icons" />
                <img src={eye1} alt="icons" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Page2-div1">
        <p>Description</p>
        <p>Additional Information</p>
        <p>Reviews(0)</p>
      </div>
      <hr className="line-hr" />
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
