import React, { useContext } from "react";
import Product from "./product";
import { connect } from "react-redux";
import { ProductContext } from "../context/productContext";
const Favorites = (props) => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      {/* {props.products &&
        props.products.map(
          (item) => item.isFavorite && <Product key={item.id} item={item} />
        )} */}
      {products &&
        products.map(
          (item) => item.isFavorite && <Product key={item.id} item={item} />
        )}
    </div>
  );
};

export default Favorites;
// const mapStateToProps = (state) => {
//   return {
//     products: state,
//   };
// };

// export default connect(mapStateToProps)(Favorites);
