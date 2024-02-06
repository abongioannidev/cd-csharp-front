import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../consts/actionTypes";
import * as API from "../api/ProductoVendidoAPI";

function* asyncGetProductosVendidos({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.getProductosVendidos, payload);

    if (response) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.GET_PRODUCTOSVENDIDOS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.GET_PRODUCTOSVENDIDOS_FAILED,
      message: error.message,
    });
  }
}

export default function* ProductoVendidoSaga() {
  yield takeLatest(actionTypes.GET_PRODUCTOSVENDIDOS, asyncGetProductosVendidos);
}
