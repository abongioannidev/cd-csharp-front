import { all } from "redux-saga/effects";

import ProductoSaga from "./ProductoSaga";
import ProductoVendidoSaga from "./ProductoVendidoSaga";
import NombreSaga from "./NombreSaga";
import UsuarioSaga from "./UsuarioSaga";
import VentaSaga from "./VentaSaga";

export default function* rootSaga() {
  yield all(
  [ProductoSaga(), 
  ProductoVendidoSaga(),
  NombreSaga(),
  UsuarioSaga(),
  VentaSaga()]);
}
