// import Page4clock from "../../../assets/Images3/Page4clock.png";
// import Page4chart from "../../../assets/Images3/Page4chart";
// import Arrow from "../../../assets/Images3/Arrow.png";
import "../MainPage.css";
import Page4clock from "../../../../assets/Images3/Page4clock.png";
import Page4chart from "../../../../assets/Images3/Page4chart.png";
import Arrow from "../../../../assets/Images3/Arrow.png";

import { useGetProductsQuery } from "../../../../services/api";
import "../MainPage.css";
function Slide4() {
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery({ q: "?limit=3&skip=25" });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading products</p>}
      <div className="page4-products-post">
        {products &&
          products.products.map((product) => (
            <div className="Each-page4-container" key={product.id}>
              <div className="sticky-img-btn ">
                <img src={product.thumbnail} alt="page4-pic" />
                <button className="New-btn">New</button>
              </div>

              <p className="page4-text-line">
                <p>
                  <span>Google</span>&nbsp;&nbsp;Trending &nbsp;&nbsp;New
                </p>
                <h4>Loudest à la Madison #1 (L&apos;integral)</h4>
                <p>
                  We focus on ergonomics and meeting you where you work.
                  It&apos;s only a keystroke away.
                </p>
                <div className="clock-chart">
                  <h6>
                    <img src={Page4clock} alt="texts" />
                    22 April 2021
                  </h6>

                  <h6>
                    <img src={Page4chart} alt="texts" />
                    10 comments
                  </h6>
                </div>
                <div className="learn-more">
                  <h4>Learn More</h4>
                  <img src={Arrow} alt="texts" />
                </div>
              </p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Slide4;
