import * as types from "../consts/actionTypes";
import { Venta } from "../../SistemaGestion/Models/Models.tsx";
const ExampleState = {
  ventas: Array<Venta>(),
  getRespuesta: undefined,
};

export function ventaReducer(state = ExampleState, action: any) {
  switch (action.type) {
    case types.GET_VENTAS_SUCCESS:
      return { ...state, ventas: action.response };
      break;
    case types.GET_VENTAS_FAILED:
      return { ...state, getRespuesta: false };
      break;

    case types.POST_VENTAS_SUCCESS:
      return { ...state, getRespuesta: true };
      break;
    case types.POST_VENTAS_FAILED:
      return { ...state, getRespuesta: false };
      break;
    default:
      return state;
      break;
  }
}
