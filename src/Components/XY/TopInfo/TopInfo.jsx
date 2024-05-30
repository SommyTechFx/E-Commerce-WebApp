import "./TopInfo.css";
import Callicon from "../../../assets/Images1/Callicon.png";
import MessageBox from "../../../assets/Images1/MessageBox.png";
import Instagram from "../../../assets/Images1/Instagram.png";
import Youtube from "../../../assets/Images1/Youtube.png";
import Facebook from "../../../assets/Images1/Facebook.png";
import Twitter from "../../../assets/Images1/Twitter.png";

function TopInfo() {
  return (
    <div className="Top-information">
      <div className="call-me">
        <div>
          <img src={Callicon} alt="call-logo" />
        </div>

        <h6>(225) 555-0118</h6>
      </div>

      <div className="Mail-Icom-Email">
        <img src={MessageBox} alt="email-details" />
        <h6>michelle.rivera@example.com</h6>
      </div>

      <div className="advert">
        <h6>Follow Us and get a chance to win 80% off</h6>
      </div>

      <div className="Socials">
        <h6>Follow Us :</h6>
        <img src={Instagram} alt="email-details" />
        <img src={Youtube} alt="email-details" />
        <img src={Facebook} alt="email-details" />
        <img src={Twitter} alt="email-details" />
      </div>
    </div>
  );
}

export default TopInfo;
