import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../context";

function Header() {
  const { cartItems } = useContext(Context);
  const cartClassName =
    cartItems.length > 0 ? "fa fa-shopping-cart" : "fa fa-cart-plus";
  return (
    <header>
      <nav className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Image Hub</h2>
        </Link>
        <Link to="/cart" className="main-cart">
          <i className={`${cartClassName}  fa-2x`}></i>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
