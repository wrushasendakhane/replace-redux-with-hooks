import React from "react";
import Product from "./product";
import { connect } from "react-redux";
const Favorites = (props) => {
  return (
    <div>
      {props.products &&
        props.products.map(
          (item) => item.isFavorite && <Product key={item.id} item={item} />
        )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state,
  };
};

export default connect(mapStateToProps)(Favorites);
