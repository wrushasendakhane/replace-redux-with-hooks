import * as actionTypes from "./actionTypes"
export const toggleFavorite = (id) => {
  return {
    type: actionTypes.TOGGLE_FAVORITE,
    id: id
  }
}