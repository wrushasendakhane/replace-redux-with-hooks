import React from "react";
import Product from "./product";

const Favorites = () => {
  const products = [];
  return (
    <div>
      {products &&
        products.map(
          (item) => item.isFavorite && <Product key={item.id} item={item} />
        )}
    </div>
  );
};

export default Favorites;
