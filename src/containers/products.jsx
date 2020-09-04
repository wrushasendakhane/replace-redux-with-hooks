import React, { useContext } from "react";
import Product from "../components/product";
import * as actions from "../store/actions/products";
import { connect } from "react-redux";
import { ProductContext } from "../context/productContext";
function Products(props) {
  const { products, toggleFavorite } = useContext(ProductContext);
  return (
    <div>
      {/* {props.products.map((item) => (
        <Product
          key={item.id}
          item={item}
          toggleFavorite={props.onToggleFavorite}
        />
      ))} */}
      {products.map((item) => (
        <Product key={item.id} item={item} toggleFavorite={toggleFavorite} />
      ))}
    </div>
  );
}

export default Products;
// const mapStateToProps = (state) => {
//   return {
//     products: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onToggleFavorite: (id) => dispatch(actions.toggleFavorite(id)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Products);
