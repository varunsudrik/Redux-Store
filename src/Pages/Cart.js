import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";

function Cart() {
  let products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handelRemove = (product) => {
    dispatch(remove(product));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard">
            <img src={product.image} alt="prodImg"></img>
            <h5> {product.title} </h5>
            <h5> {product.price} </h5>
            <button onClick={() => handelRemove(product.id)} className="btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
