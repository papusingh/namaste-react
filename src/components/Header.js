import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-56" alt="logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}> Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}> Grocery</Link>
          </li>
          <li className="px-4">
            <Link to={"/cart"}>Cart ({cartItems.length})</Link>
          </li>
          <li className="px-4">
            <button
              className="login-button"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="ml-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
