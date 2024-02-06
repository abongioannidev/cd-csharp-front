import {
  Button,
  Grid,
  TextField,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { typography } from "@mui/system";
import { Card, CardContent } from "@mui/material";
import * as React from "react";
import { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Producto } from "./Models/Models.tsx";
import { useEffect, useState } from "react";
import { Modal, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getProductos } from "../redux/actions/ProductoAction";
import { postVenta } from "../redux/actions/VentaAction";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "descripciones", headerName: "Descripcion", width: 130 },
  {
    field: "precioVenta",
    headerName: "Precio Venta",
    type: "number",
    width: 130,
  },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
    width: 130,
  },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px #000",
  boxShadow: 13,
  borderRadius: 5,
  pt: 2,
  px: 3,
  pb: 10,
};

export default function Ventas(props) {
  const [agregarProducto, setAgregarProducto] = useState(new Producto());
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [modalVerProductos, setModalVerProductos] = useState(false);
  const [rows, setRows] = useState([]);
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productoReducer?.productos);
  const ventaRespuesta = useSelector((state) => state.ventaReducer?.getRespuesta);

  useEffect(() => {
    dispatch(getProductos(props.idUsuario));
  }, []);

  useEffect(() => {
    setRows(productos);
  }, [productos]);

  const onChangeId = (event) => {
    let find = false;
    rows.forEach((element) => {
      if (event.target.value == element.id) {
        setAgregarProducto(
          new Producto(
            element.id,
            element.descripciones,
            element.costo,
            element.precioVenta,
            0
          )
        );
        find = true;
      }
    });
    if (!find) {
      setAgregarProducto(new Producto(0, "", 0, 0, 0));
    }
  };

  const cambiarProducto = (i) => {
    let yaPaso = false;
    let carritoNuevo = carrito.map((item, j) => {
      if (j === i && !yaPaso) {
          yaPaso = true;
          item.stock = (parseInt(item.stock) + parseInt(agregarProducto.stock));
          return item;
      }
      else {
          return item;
      }
  })
  setCarrito(carritoNuevo);
  };

  const onClickAgregar = () => {
    if(agregarProducto.id == 0){
      return 
    }
    var repetido = false;
    carrito.map((e, index) => {
      if (e.id == agregarProducto.id) {
        cambiarProducto(index);
        repetido = true;
      }
    });

    if (!repetido) {
      setCarrito([...carrito, agregarProducto]);
    }

    setAgregarProducto(new Producto(0, "", 0, 0, 0));
  };

  const ActualizarTotal = () => {
    let total;
    carrito.forEach((element) => {
      total = total + element.stock * element.precioVenta;
    });
    return total;
  };

  const onChangeStock = (event) => {
    setAgregarProducto({ ...agregarProducto, stock: event.target.value });
  };

  

  useEffect(() => {
    let total1 = 0;
    carrito.map((e) => {
      total1 = total1 + e.stock * e.precioVenta;
    });
    setTotal(total1);
  }, [carrito]);

  const onClickVerProductos = () => {
    setModalVerProductos(true);
  };
  const onClickSalirModal = () => {
    setModalVerProductos(false);
  };


  const onClickConfirmar = () => {
    dispatch(postVenta(carrito, props.idUsuario))
    alert("Venta Confirmada")
    setCarrito([])
  }

  return (
    <>
      <h2>Ventas</h2>
      <Card>
        <CardContent className="paperCard">
          <Typography textAlign={"left"} variant="h5">
            Nueva Venta
          </Typography>
          <br />
          <Grid margin={1}>
            <Card>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                marginBottom={2}
              >
                <Typography textAlign={"left"} variant="h6">
                  Agregar Producto
                </Typography>
                <Button variant="outlined" onClick={onClickVerProductos}>
                  Ver Productos
                </Button>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid margin={1}>
                  <TextField
                    name="id"
                    label="Id"
                    onChange={onChangeId}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid margin={1}>
                  <TextField
                    name="descripciones"
                    label="Descripcion"
                    value={agregarProducto.descripciones}
                    disabled
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid margin={1}>
                  <TextField
                    name="precioVenta"
                    label="Precio de Venta"
                    value={"$" + agregarProducto.precioVenta}
                    disabled
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid margin={1}>
                  <TextField
                    type="number"
                    name="stock"
                    label="Stock"
                    style={{ backgroundColor: "yellow" }}
                    value={agregarProducto.stock}
                    onChange={onChangeStock}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid margin={1}>
                  <Button variant="contained" onClick={onClickAgregar}>
                    Agregar
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid margin={1}>
            <Card>
              <Typography textAlign={"left"} variant="h6">
                Carrito
              </Typography>
              <TableContainer component={Paper} onChange={ActualizarTotal}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Descripcion</TableCell>
                      <TableCell>Precio</TableCell>
                      <TableCell>Stock</TableCell>
                      <TableCell>Total/Producto</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {carrito.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.descripciones}</TableCell>
                        <TableCell>{row.precioVenta}</TableCell>
                        <TableCell>{row.stock}</TableCell>
                        <TableCell>{row.precioVenta * row.stock}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={2}>Total</TableCell>
                      <TableCell align="right">${total}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
          <Grid textAlign={"end"}>
            <Button variant="contained" onClick={onClickConfirmar} >Confirmar Venta</Button>
          </Grid>
        </CardContent>
      </Card>

      <Modal
        open={modalVerProductos}
        onClose={onClickSalirModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 520 }}>
          <h2>Lista de Productos</h2>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        </Box>
      </Modal>
    </>
  );
}
