import "./MainPage.css";

import Page3Icon1 from "../../../assets/Images3/Page3Icon1.png";
import Page3Icon2 from "../../../assets/Images3/Page3Icon2.svg";
import Page3Icon3 from "../../../assets/Images3/Page3Icon3.svg";
import Page4Pc1 from "../../../assets/Images3/Page4Pc1.png";
import Page4Pc2 from "../../../assets/Images3/Page4Pc2.png";
import Page4Pc3 from "../../../assets/Images3/Page4Pc3.png";
import Page4clock from "../../../assets/Images3/Page4clock.png";
import Page4chart from "../../../assets/Images3/Page4chart.png";
import Arrow from "../../../assets/Images3/Arrow.png";

import Pg5profileicon from "../../../assets/Images3/Pg5profileicon.png";
import StarIconFill from "../../../assets/Images3/StarIconFill.png";
import StarIconE from "../../../assets/Images3/StarIconE.png";
import Page5grid1 from "../../../assets/Images3/Page5grid1.png";
import Page5grid2 from "../../../assets/Images3/Page5grid2.png";
import Page5grid3 from "../../../assets/Images3/Page5grid3.png";
import Page5grid4 from "../../../assets/Images3/Page5grid4.png";
import Page5grid5 from "../../../assets/Images3/Page5grid5.png";
import Page5grid6 from "../../../assets/Images3/Page5grid6.png";
import Page5grid7 from "../../../assets/Images3/Page5grid7.png";
import Page5grid8 from "../../../assets/Images3/Page5grid8.png";
import Page5grid9 from "../../../assets/Images3/Page5grid9.png";
import BlueIconFacebook from "../../../assets/Images1/BlueIconFacebook.png";
import BlueIconInstagram from "../../../assets/Images1/BlueIconInstagram.png";
import BlueIconTwitter from "../../../assets/Images1/BlueIconTwitter.png";
import Slide1 from "./MainPageSlides/Slide1";
import Slide2 from "./MainPageSlides/Slide2";
import Slide7 from "./MainPageSlides/Slide7";
// import Instagram from "../../../../assets/Images1/Instagram.png";
// import Twitter from "../../../../assets/Images1/Twitter.png";
function MainPage() {
  return (
    <div className="Mainpage">
      <Slide1 />

      <div className="page2">
        <div>
          <p className="product-text">
            <h4>Featured Products</h4>
            <h3>BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between </p>
          </p>
        </div>
      </div>
      <Slide2 />

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
        <div className="page4-text">
          <p>
            <h5>Practice Advice</h5>
            <h5>
              <span>Featured Posts</span>
            </h5>
          </p>
        </div>

        <div className="page4-products-post">
          <div className="Each-page4-container">
            <div className="sticky-img-btn">
              <img src={Page4Pc1} alt="page4-pic" />
              <button className="New-btn">New</button>
            </div>

            <p className="page4-text-line">
              <p>
                <span>Google</span>&nbsp;&nbsp;Trending &nbsp;&nbsp;New
              </p>
              <h4>Loudest à la Madison #1 (L&apos;integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It&apos;s
                only a keystroke away.
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
          <div className="Each-page4-container">
            <div className="sticky-img-btn">
              <img src={Page4Pc2} alt="page4-pic" />
              <button className="New-btn">New</button>
            </div>

            <p className="page4-text-line">
              <p>
                <span>Google</span>&nbsp;&nbsp;Trending &nbsp;&nbsp;New
              </p>
              <h4>Loudest à la Madison #1 (L&apos;integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It&apos;s
                only a keystroke away.
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
          <div className="Each-page4-container">
            <div className="sticky-img-btn">
              <img src={Page4Pc3} alt="page4-pic" />
              <button className="New-btn">New</button>
            </div>

            <p className="page4-text-line">
              <p>
                <span>Google</span>&nbsp;&nbsp;Trending &nbsp;&nbsp;New
              </p>
              <h4>Loudest à la Madison #1 (L&apos;integral)</h4>
              <p>
                We focus on ergonomics and meeting you where you work. It&apos;s
                only a keystroke away.
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
        </div>
      </div>

      <div className="Page5-Total">
        <div className="Page5-div1">
          <h3>What they say about us</h3>

          <div className="page5-profile">
            <div className="page5-image-section">
              <img src={Pg5profileicon} alt="profile" />
              <div>
                <img src={StarIconFill} alt="stars" />
                <img src={StarIconFill} alt="stars" />
                <img src={StarIconFill} alt="stars" />
                <img src={StarIconFill} alt="stars" />
                <img src={StarIconE} alt="stars" />
              </div>
            </div>

            <p className="page5-profile-text">
              <h6>
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </h6>

              <h6>
                <span>Regina Miles</span>
              </h6>
              <small>Designer</small>
            </p>
          </div>
        </div>
        <div className="page5-div2">
          <div className="grid1">
            <img src={Page5grid1} alt="pics" />
            <img src={Page5grid2} alt="pics" />
            <img src={Page5grid3} alt="pics" />
          </div>
          <div className="grid2">
            <img src={Page5grid4} alt="pics" />
            <img src={Page5grid5} alt="pics" />
            <img src={Page5grid6} alt="pics" />
          </div>
          <div className="grid3">
            <img src={Page5grid7} alt="pics" />
            <img src={Page5grid8} alt="pics" />
            <img src={Page5grid9} alt="pics" />
          </div>
        </div>
      </div>

      <div className="Page6-Total">
        <div className="Page6-text">
          <h6>
            <span>Designing Better Experience</span>
          </h6>

          <h2>Problems trying to resolve the conflict between </h2>

          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>

          <p>
            <span>$16.48</span>
          </p>

          <button>ADD YOUR CALL TO ACTION</button>
        </div>
      </div>

      <div className="Page7-Total">
        <div>
          <h3>Bandage</h3>
        </div>

        <div className="Page7-text-footer">
          <img src={BlueIconFacebook} alt="social" />
          <img src={BlueIconInstagram} alt="social" />
          <img src={BlueIconTwitter} alt="social" />
        </div>
      </div>
      <hr />
      <Slide7 />

      <div className="Page7-Footer-Total-info">
        <p>Made With Love By Finland All Right Reserved </p>
      </div>
    </div>
  );
}

export default MainPage;