import * as actionTypes from "../consts/actionTypes";

export function getUsuario(param1, param2) {
  return {
    type: actionTypes.GET_USUARIO,
    payload:{ param1, param2 }
  };
}

export function getUsuarioNombre(param) {
  return {
    type: actionTypes.GET_USUARIOBYNOMBRE,
    payload: param
  };
}

export function postUsuario(param) {
  return {
    type: actionTypes.POST_USUARIO,
    payload: param,
  };
}

export function putUsuario(param) {
  return {
    type: actionTypes.PUT_USUARIO,
    payload: param,
  };
}