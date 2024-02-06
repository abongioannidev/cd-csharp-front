import { combineReducers } from "redux";

import { nombreReducer} from "./nombreReducer.tsx";
import { usuarioReducer } from "./usuarioReducer.tsx";
import { productoReducer } from "./productoReducer.tsx";
import { productoVendidoReducer } from "./productoVendidoReducer.tsx";
import { ventaReducer } from "./ventaReducer.tsx";

const rootReducer = combineReducers({
  nombreReducer: nombreReducer,
  usuarioReducer: usuarioReducer,
  productoReducer: productoReducer,
  productoVendidoReducer: productoVendidoReducer,
  ventaReducer: ventaReducer,
});

export default rootReducer;
