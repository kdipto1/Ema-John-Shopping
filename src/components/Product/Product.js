import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Product.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddToCart }) => {
  // console.log(props.product);
  // const { product, handleAddToCart } = props;
  const { img, name, price, id, seller, ratings } = product;

  return (
    <div className="product">
      <img src={img} alt="products image" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings}⭐</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
