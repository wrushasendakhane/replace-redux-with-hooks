import React, { useState } from "react";
import Product from "../components/product";

function Products() {
  const [products, setProducts] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (id) => {
    setProducts((prevState) => {
      return prevState.map((item) => {
        const product = { ...item };
        if (product.id === id) {
          product.isFavorite = !product.isFavorite;
        }
        return product;
      });
    });
  };

  return (
    <div>
      {products.map((item) => (
        <Product key={item.id} item={item} toggleFavorite={toggleFavorite} />
      ))}
    </div>
  );
}

export default Products;
