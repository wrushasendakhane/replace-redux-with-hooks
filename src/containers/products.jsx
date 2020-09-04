import React from "react";
import Product from "../components/product";
import * as actions from "../store/actions/products";
import { connect } from "react-redux";
function Products(props) {
  return (
    <div>
      {props.products.map((item) => (
        <Product
          key={item.id}
          item={item}
          toggleFavorite={props.onToggleFavorite}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleFavorite: (id) => dispatch(actions.toggleFavorite(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
