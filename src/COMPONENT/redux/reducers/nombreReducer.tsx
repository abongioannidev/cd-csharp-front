import * as types from "../consts/actionTypes";
const ExampleState = {
  nombre: String,
  getRespuesta: undefined,
};

export function nombreReducer(state = ExampleState, action: any) {
  switch (action.type) {
    case types.GET_NOMBRE_SUCCESS:
      return { ...state, nombre: action.response };
      break;
    case types.GET_NOMBRE_FAILED:
      return { ...state, getRespuesta: false };
      break;
    default:
      return state;
      break;
  }
}
