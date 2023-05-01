import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import redux from "./redux.png";

function Navbar() {
  let items = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">
        {/* Rexux Store */}
        <a href="http://localhost:3001/">
          <img src={redux} alt="prodImg"></img>
        </a>
      </span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Items: {items.length} </span>
      </div>
    </div>
  );
}

export default Navbar;
