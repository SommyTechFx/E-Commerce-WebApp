// import React from 'react'
// import "../MainPage.css";

// import pic1 from "../../../../assets/Images1/pic1.png";
// import pic2 from "../../../../assets/Images1/pic2.png";
// import pic3 from "../../../../assets/Images1/pic3.png";
// import pic4 from "../../../../assets/Images1/pic4.png";

import { useGetProductsQuery } from "../../../../services/api";
import "./Slides.css";

function Slide1() {
  // const [popupState, setPopupState] = useState({
  //   popup1: false,
  //   popup2: false,
  // });

  // const showPopup = (popupName) => {
  //   setPopupState((prevState) => ({
  //     ...prevState,
  //     [popupName]: true,
  //   }));
  // };

  // const closePopup = (popupName) => {
  //   setPopupState((prevState) => ({
  //     ...prevState,
  //     [popupName]: false,
  //   }));
  // };
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery({ q: "?limit=2&skip=10" });
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading products</p>}
      <div className="page1">
        <div className="container">
          {products &&
            products.products.map((product) => (
              <div key={product.id} className="fig1">
                <img src={product.thumbnail} alt="pic1" />
                <p className="fig1-text">
                  <p>{product.stock} Items</p>
                  <h5>{product.category}</h5>
                  <h6>Read More </h6>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Slide1;
