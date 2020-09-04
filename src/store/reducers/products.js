import * as actionTypes from "../actions/actionTypes"
const initialState = [{
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
},]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVORITE:
      return state.map((item) => {
        const product = { ...item };
        if (product.id === action.id) {
          product.isFavorite = !product.isFavorite;
        }
        return product;
      });
    default:
      return state;
  }
}

export default reducer;