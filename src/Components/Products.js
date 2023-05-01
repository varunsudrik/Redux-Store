import React, { useEffect, useState } from "react";
import { add } from "../Store/cartSlice";
import { useDispatch } from "react-redux";

function Products() {
  const dispatch = useDispatch();

  let [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handelAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="/" />
          <h4>{product.title}</h4>
          <h4>{product.price} Rs</h4>
          <button onClick={() => handelAdd(product)} className="btn">
            {" "}
            Add to cart{" "}
          </button>
        </div>
      ))}
    </div>
  );
}
export default Products;
