import * as types from "../consts/actionTypes";
import { ProductoVendido } from "../../SistemaGestion/Models/Models";
const ExampleState = {
  productosVendidos: Array<ProductoVendido>(),
  postRespuesta: undefined,
};

export function productoVendidoReducer(state = ExampleState, action: any) {
  switch (action.type) {
    case types.GET_PRODUCTOSVENDIDOS_SUCCESS:
      return { ...state, productosVendidos: action.response };
      break;
    case types.GET_PRODUCTOSVENDIDOS_FAILED:
      return { ...state, postRespuesta: action.response.data.id };
      break;
    default:
      return state;
      break;
  }
}
