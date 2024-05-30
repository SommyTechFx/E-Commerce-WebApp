import "./LoginSet.css";
import profileIcon from "../../../../assets/Images2/profileIcon.png";
import BlueSearchIcon from "../../../../assets/Images2/BlueSearchIcon.png";
import CartIcon from "../../../../assets/Images2/CartIcon.png";
import HeartIcon from "../../../../assets/Images2/HeartIcon.png";

function LoginSet() {
  return (
    <div className="whole-login">
      <div className="login-section">
        <img src={profileIcon} alt="p-logo" />
        <h6>Login / Register</h6>
      </div>

      <div className="Login-Icons">
        <img src={BlueSearchIcon} alt="p-logo" />
        <img src={CartIcon} alt="p-logo" />
        <img src={HeartIcon} alt="p-logo" />
      </div>
    </div>
  );
}

export default LoginSet;
