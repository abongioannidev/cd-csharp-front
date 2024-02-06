import * as types from "../consts/actionTypes";
import { Usuario } from "../../SistemaGestion/Models/Models.tsx";
const ExampleState = {
  usuario: Usuario,
  getRespuesta: undefined,
  postRespuesta: undefined,
  putRespuesta: undefined,
};

export function usuarioReducer(state = ExampleState, action: any) {
  switch (action.type) {
    case types.POST_USUARIO_SUCCESS:
      return { ...state, postRespuesta: true };
      break;
    case types.POST_USUARIO_FAILED:
      return { ...state, postRespuesta: false };
      break;

    case types.GET_USUARIO_SUCCESS:
      return { ...state, usuario: action.response };
      break;
    case types.GET_USUARIO_FAILED:
      return { ...state, getRespuesta: false };
      break;

    case types.GET_USUARIOBYNOMBRE_SUCCESS:
      return { ...state, usuario: action.response };
      break;
    case types.GET_USUARIOBYNOMBRE_FAILED:
      return { ...state, getRespuesta: false };
      break;

    case types.PUT_USUARIO_SUCCESS:
      return { ...state, putRespuesta: true };
      break;
    case types.PUT_USUARIO_FAILED:
      return { ...state, putRespuesta: false };
      break;
    default:
      return state;
      break;
  }
}
