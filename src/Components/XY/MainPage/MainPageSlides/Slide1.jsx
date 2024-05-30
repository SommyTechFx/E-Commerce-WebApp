// import React from 'react'
import "../../../../Components/XY/MainPage/MainPage.css";
import pic1 from "../../../../assets/Images1/pic1.png";
import pic2 from "../../../../assets/Images1/pic2.png";
import pic3 from "../../../../assets/Images1/pic3.png";
import pic4 from "../../../../assets/Images1/pic4.png";

function Slide1() {
  return (
    <div className="page1">
      <div className="fig1">
        <img src={pic1} alt="pic1" />
      </div>
      <div>
        <div className="fig2">
          <img src={pic2} alt="pic1" />
        </div>

        <div className="fig3" style={{ display: "flex" }}>
          <div>
            <img src={pic3} alt="pic1" />
          </div>
          <div>
            <img src={pic4} alt="pic1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide1;
