import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../consts/actionTypes";
import * as API from "../api/NombreAPI";


function* asyncGetNombre({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.getNombre, payload);

    if (response.id !== 0) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.GET_NOMBRE_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.GET_NOMBRE_FAILED,
      message: error.message,
    });
  }
}
export default function* NombreSaga() {
  yield takeLatest(actionTypes.GET_NOMBRE, asyncGetNombre);
}
