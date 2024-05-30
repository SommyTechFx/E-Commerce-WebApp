import "./MainPage.css";
import pic1 from "../../../assets/Images1/pic1.png";
import pic2 from "../../../assets/Images1/pic2.png";
import pic3 from "../../../assets/Images1/pic3.png";
import pic4 from "../../../assets/Images1/pic4.png";
import PC1 from "../../../assets/Images2/PC1.png";
import PC2 from "../../../assets/Images2/PC2.png";
import PC3 from "../../../assets/Images2/PC3.png";
import PC4 from "../../../assets/Images2/PC4.png";
import PC5 from "../../../assets/Images2/PC5.png";
import PC6 from "../../../assets/Images2/PC6.png";
import PC7 from "../../../assets/Images2/PC7.png";
import PC8 from "../../../assets/Images2/PC8.png";
import PC9 from "../../../assets/Images2/PC9.png";
import PC10 from "../../../assets/Images2/PC10.png";
import Page3Icon1 from "../../../assets/Images3/Page3Icon1.png";
import Page3Icon2 from "../../../assets/Images3/Page3Icon2.svg";
import Page3Icon3 from "../../../assets/Images3/Page3Icon3.svg";

function MainPage() {
  return (
    <div className="Mainpage">
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

      <div className="page2">
        <div>
          <p className="product-text">
            <h4>Featured Products</h4>
            <h3>BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between </p>
          </p>
        </div>
      </div>

      <div className="Page2-Total">
        <div className=" page2-product">
          <div>
            <img src={PC1} alt="pic1" />
            <p className="product-info">
              <h5>Graphic Design</h5>
              <p>English Department</p>
              <h6>
                <span>$16.48</span>$6.48
              </h6>
            </p>
          </div>
          <div>
            <img src={PC2} alt="pic1" />
            <p className="product-info">
              <h5>Graphic Design</h5>
              <p>English Department</p>
              <h6>
                <span>$16.48</span>$6.48
              </h6>
            </p>
          </div>
          <div>
            <img src={PC3} alt="pic1" />
            <p className="product-info">
              <h5>Graphic Design</h5>
              <p>English Department</p>
              <h6>
                <span>$16.48</span>$6.48
              </h6>
            </p>
          </div>
          <div>
            <img src={PC4} alt="pic1" />
            <p className="product-info">
              <h5>Graphic Design</h5>
              <p>English Department</p>
              <h6>
                <span>$16.48</span>$6.48
              </h6>
            </p>
          </div>
          <div>
            <img src={PC5} alt="pic1" />
            <p className="product-info">
              <h5>Graphic Design</h5>
              <p>English Department</p>
              <h6>
                <span>$16.48</span>$6.48
              </h6>
            </p>
          </div>
        </div>

        <div className=" page3-product">
          <div>
            <img src={PC6} alt="pic1" />
            <p className="product-info">
              <h5>Graphic Design</h5>
              <p>English Department</p>
              <h6>
                <span>$16.48</span>$6.48
              </h6>
            </p>
          </div>
          <div>
            <img src={PC7} alt="pic1" />
            <p className="product-info">
              <h5>Graphic Design</h5>
              <p>English Department</p>
              <h6>
                <span>$16.48</span>$6.48
              </h6>
            </p>
          </div>
          <div>
            <img src={PC8} alt="pic1" />
            <p className="product-info">
              <h5>Graphic Design</h5>
              <p>English Department</p>
              <h6>
                <span>$16.48</span>$6.48
              </h6>
            </p>
          </div>
          <div>
            <img src={PC9} alt="pic1" />
            <p className="product-info">
              <h5>Graphic Design</h5>
              <p>English Department</p>
              <h6>
                <span>$16.48</span>$6.48
              </h6>
            </p>
          </div>
          <div>
            <img src={PC10} alt="pic1" />
            <p className="product-info">
              <h5>Graphic Design</h5>
              <p>English Department</p>
              <h6>
                <span>$16.48</span>$6.48
              </h6>
            </p>
          </div>
        </div>

        <div className="page-2-button">
          <button>LOAD MORE PRODUCTS</button>
        </div>
      </div>

      <div className="Page3-Total">
        <div className="Page3">
          <div>
            <p className="product-text">
              <h4>Featured Products</h4>
              <h3>THE BEST SERVICES</h3>
              <p>Problems trying to resolve the conflict between </p>
            </p>
          </div>

          <div className="page3-product-service">
            <div className="product-service2">
              <img src={Page3Icon1} alt="page4" />
              <div>
                <p className="page3-product-info">
                  <h5>Easy Wins</h5>
                  <p>
                    <span>Get your best looking smile now!</span>
                  </p>
                </p>
              </div>
            </div>
            <div className="product-service3">
              <img src={Page3Icon2} alt="page4" />
              <div>
                <p className="page3-product-info">
                  <h5>Concrete</h5>
                  <p>
                    <span>
                      Defalcate is most focused in helping you discover your
                      most beautiful smile
                    </span>
                  </p>
                </p>
              </div>
            </div>
            <div className="product-service1">
              <img src={Page3Icon3} alt="page4" />
              <div>
                <p className="page3-product-info">
                  <h5>Hack Growth</h5>
                  <p>
                    <span>Hack Growth</span>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Page4-Total">
        <div>
          <p className="page4-text">
            <h5>Practice Advice</h5>
            <h5>
              <span>Featured Posts</span>
            </h5>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
