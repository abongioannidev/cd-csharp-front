import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../consts/actionTypes";
import * as API from "../api/UsuarioAPI";

function* asyncGetUsuario({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.getUsuarioNombreYContraseña, payload);

    if (response) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.GET_USUARIO_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.GET_USUARIO_FAILED,
      message: error.message,
    });
  }
}

function* asyncPostUsuario({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.postUsuario, payload);

    if (response) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.POST_USUARIO_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.POST_USUARIO_FAILED,
      message: error.message,
    });
  }
}

function* asyncPutUsuario({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.putUsuario, payload);

    if (response) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.PUT_USUARIO_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.PUT_USUARIO_FAILED,
      message: error.message,
    });
  }
}

function* asyncGetUsuarioByNombre({ payload }) {
  try {
    //data is obtained after axios call is resolved
    var response = yield call(API.getUsuarioNombre, payload);

    if (response) {
      //dispatch action to change redux state
      yield put({
        type: actionTypes.GET_USUARIOBYNOMBRE_SUCCESS,
        response,
      });
    }
  } catch (error) {
    yield put({
      type: actionTypes.GET_USUARIOBYNOMBRE_FAILED,
      message: error.message,
    });
  }
}

export default function* UsuarioSaga() {
  yield takeLatest(actionTypes.GET_USUARIO, asyncGetUsuario);
  yield takeLatest(actionTypes.GET_USUARIOBYNOMBRE, asyncGetUsuarioByNombre);
  yield takeLatest(actionTypes.POST_USUARIO, asyncPostUsuario);
  yield takeLatest(actionTypes.PUT_USUARIO, asyncPutUsuario);
}
