import * as types from "../consts/actionTypes";
import { Producto } from "../../SistemaGestion/Models/Models.tsx";

const ExampleState = {
  producto: Producto,
  productos: Array<Producto>(),
  getRespuesta: undefined,
};

export function productoReducer(state = ExampleState, action: any) {
  switch (action.type) {
    case types.GET_PRODUCTOS_SUCCESS:
      return { ...state, productos: action.response };
      break;
    case types.GET_PRODUCTOS_FAILED:
      return { ...state, productos: false };
      break;

    case types.PUT_PRODUCTO_SUCCESS:
      return { ...state, productos: action.response };
      break;
    case types.PUT_PRODUCTO_FAILED:
      return { ...state, getRespuesta: false };
      break;

    case types.POST_PRODUCTO_SUCCESS:
      return { ...state, productos: action.response };
      break;
    case types.POST_PRODUCTO_FAILED:
      return { ...state, getRespuesta: false };
      break;

    case types.DELETE_PRODUCTO_SUCCESS:
      return { ...state, productos: action.response };
      break;
    case types.DELETE_PRODUCTO_FAILED:
      return { ...state, getRespuesta: false };
      break;

    default:
      return state;
      break;
  }
}
