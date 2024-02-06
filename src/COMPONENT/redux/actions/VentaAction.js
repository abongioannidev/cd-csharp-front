import * as actionTypes from "../consts/actionTypes";

export function getVentas(param) {
  return {
    type: actionTypes.GET_VENTAS,
    payload: param
  };
}

export function postVenta(param1, param2) {
  return {
    type: actionTypes.POST_VENTAS,
    payload: {param1, param2} ,
  };
}

