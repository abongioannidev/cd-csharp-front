import * as actionTypes from "../consts/actionTypes";

export function getProductosVendidos(param) {
  return {
    type: actionTypes.GET_PRODUCTOSVENDIDOS,
    payload: param
  };
}

