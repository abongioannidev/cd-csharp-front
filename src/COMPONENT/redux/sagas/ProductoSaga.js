import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../consts/actionTypes";
import * as API from "../api/ProductoAPI";

function* asyncGetProductos({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.getProductos, payload);

    if (response) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.GET_PRODUCTOS_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.GET_PRODUCTOS_FAILED,
      message: error.message,
    });
  }
}

function* asyncPutProducto({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.putProducto, payload);

    if (response) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.PUT_PRODUCTO_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.PUT_PRODUCTO_FAILED,
      message: error.message,
    });
  }
}

function* asyncPostProducto({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.postProducto, payload);

    if (response) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.POST_PRODUCTO_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.POST_PRODUCTO_FAILED,
      message: error.message,
    });
  }
}

function* asyncDeleteProducto({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.deleteProducto, payload);

    if (response) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.DELETE_PRODUCTO_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.DELETE_PRODUCTO_FAILED,
      message: error.message,
    });
  }
}
export default function* ProductoSaga() {
  yield takeLatest(actionTypes.GET_PRODUCTOS, asyncGetProductos);
  yield takeLatest(actionTypes.PUT_PRODUCTO, asyncPutProducto);
  yield takeLatest(actionTypes.POST_PRODUCTO, asyncPostProducto);
  yield takeLatest(actionTypes.DELETE_PRODUCTO, asyncDeleteProducto);
}
