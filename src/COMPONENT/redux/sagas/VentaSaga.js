import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../consts/actionTypes";
import * as API from "../api/VentaAPI";

function* asyncGetVentas({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.getVentas, payload);

    if (response) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.GET_VENTAS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.GET_VENTAS_FAILED,
      message: error.message,
    });
  }
}

function* asyncPostVentas({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.postVenta, payload);

    if (response) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.POST_VENTAS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.POST_VENTAS_FAILED,
      message: error.message,
    });
  }
}

export default function* VentaSaga() {
  yield takeLatest(actionTypes.GET_VENTAS, asyncGetVentas);
  yield takeLatest(actionTypes.POST_VENTAS, asyncPostVentas);
}
