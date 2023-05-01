import React, { useEffect, useState } from "react";

function Products() {
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
  return (
    <div className="productsWrapper">
      {products.map((e) => (
        <div className="card" key={e.id}>
          <img src={e.image} alt="/" />
          <h4>{e.title}</h4>
          <h4>{e.price} Rs</h4>
          <button className="btn"> Add to cart </button>
        </div>
      ))}
    </div>
  );
}
export default Products;
