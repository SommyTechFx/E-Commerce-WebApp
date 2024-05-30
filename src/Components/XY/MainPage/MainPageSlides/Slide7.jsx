// import React from 'react'
import "../../../../Components/XY/MainPage/MainPage.css";

function Slide7() {
  return (
    <div className="Page7-Footer-Total">
      <div className="Page7-Footer">
        <div>
          <h5>Company Info</h5>
          <p>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </p>
        </div>
      </div>
      {/* section2 */}
      <div className="Page7-Footer">
        <div>
          <h5>Legal</h5>
          <p>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </p>
        </div>
      </div>
      <div className="Page7-Footer">
        <div>
          <h5>Features</h5>
          <p>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </p>
        </div>
      </div>
      <div className="Page7-Footer">
        <div>
          <h5>Resources</h5>
          <p>
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </p>
        </div>
      </div>
      <div className="Page7-Footer">
        <div>
          <h5>Get In Touch</h5>
          <p>
            <form action="/submit-form" method="post">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
              <button type="submit">Submit</button>
            </form>
            <p>Lore imp sum dolor Amit</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slide7;
