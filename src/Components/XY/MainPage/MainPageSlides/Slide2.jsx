import "./Slides.css";
import { useGetProductsQuery } from "../../../../services/api.js";
// import { useSelector, useDispatch } from "react-redux";

function Slide2() {
  // const dispatch = useDispatch();
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery({ q: "?limit=8&skip=0" });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading products</p>}
      <div className="Page2-Total" id="product">
        <div className=" page2-product">
          {products &&
            products.products.map((product) => (
              <div key={product.id} className="product-div">
                <img src={product.thumbnail} alt="pic1" />
                <p className="product-info">
                  <h5>{product.title}</h5>
                  <p>{product.category}</p>
                  <h6>
                    <span>${product.price}</span>${product.discountPercentage}
                  </h6>
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Slide2;
