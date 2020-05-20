import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../context";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);

  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    Context
  );

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="fa fa-heart favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="fa fa-heart-o favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className="fa fa-shopping-cart cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return <i className="fa fa-plus cart" onClick={() => addToCart(img)}></i>;
    }
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid clickImg" alt="" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
