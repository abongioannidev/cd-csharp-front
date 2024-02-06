import * as actionTypes from "../consts/actionTypes";

export function getProductos(param) {
  return {
    type: actionTypes.GET_PRODUCTOS,
    payload: param,
  };
}

export function putProducto(param) {
  return {
    type: actionTypes.PUT_PRODUCTO,
    payload: param,
  };
}
export function postProducto(param) {
  return {
    type: actionTypes.POST_PRODUCTO,
    payload: param,
  };
}
export function deleteProducto(param) {
  return {
    type: actionTypes.DELETE_PRODUCTO,
    payload: param,
  };
}
