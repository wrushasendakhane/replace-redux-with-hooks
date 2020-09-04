import React, { createContext, useState } from "react";

export const ProductContext = createContext({
  products: [],
  toggleFavorite: (id) => { }
});

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([{
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
  }]);

  const onToggleFavorite = (id) => {
    setProducts(prevState => {
      return prevState.map(item => {
        const product = { ...item };
        if (product.id === id) {
          product.isFavorite = !product.isFavorite;
        }
        return product;
      })
    });
  }

  return (
    <ProductContext.Provider value={{ products: products, toggleFavorite: onToggleFavorite }} >
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;