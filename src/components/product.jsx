import React from "react";

const Product = (props) => {
  const { item, toggleFavorite } = props;
  return (
    <div className="shadow mb-1 bg-white rounded">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <button
            className="btn btn-danger"
            onClick={() => toggleFavorite(item.id)}
          >
            {item.isFavorite ? "Un-Favorite" : "Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
