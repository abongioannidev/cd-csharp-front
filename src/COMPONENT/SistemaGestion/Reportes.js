import { Card, CardContent, Grid, Typography, Box, TextField, Button} from '@mui/material';
import { typography } from '@mui/system';
import { Component } from 'react';
import * as React from 'react';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VerButtom from '../AditionalComponents/VerButtom.tsx';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarFilterButton,
    GridToolbarExport,
  } from "@mui/x-data-grid";
import { Producto, Venta } from './Models/Models.tsx';
import { ProductoVendido } from './Models/Models.tsx';
import { useEffect } from 'react';
import { getProductos } from '../redux/actions/ProductoAction';
import { getProductosVendidos } from '../redux/actions/ProductoVendidoAction';
import { getVentas } from '../redux/actions/VentaAction';
import { useSelector, useDispatch } from "react-redux";


export default function Reportes(props) {
    const dispatch = useDispatch()
    const productos = useSelector((state) => state.productoReducer?.productos)
    const ventas = useSelector((state) => state.ventaReducer?.ventas)
    const productosVendidos = useSelector((state) => state.productoVendidoReducer?.productosVendidos)
    const [abrirModal, setAbrirModal] = React.useState(false)
    const [rowsInicial, setRowsInicial] = React.useState([{id: 0, cantProductos: 0, TotalFacturado: 0}]) 
    const [rowsModal, setRowsModal] = React.useState([]) 
    const [rowClicked, setRowClicked] = React.useState([]);
    const [cargados, setCargados] = React.useState(false)


    useEffect(() => {
        dispatch(getProductos(props.idUsuario))
        dispatch(getProductosVendidos(props.idUsuario))
        dispatch(getVentas(props.idUsuario))
        
    }, [])


    const onRowClick = (e) => {
        setRowClicked([e.row.id, e.row.cantProductos, e.row.TotalFacturado])
    }


    const columns = [
        { field: "id", headerName: "Id Venta", width: 130 },
        { field: "cantProductos", headerName: "Cant. Productos Vendidos", width: 200 },
        { field: "TotalFacturado", headerName: "Total Facturado", width: 130 },
    ];

    useEffect(() => {
        
            let rowsActualizados = [];
            ventas.forEach(venta => {
                let row = {id: venta.id, cantProductos: 0, TotalFacturado: 0};
                let productos = [];
                let cuentaFacturado = 0;
                let cuentaProductos = 0;
    
                row.id = venta.id
                productos = GetProductosPorVenta(venta.id);
                row.cantProductos = productos.length;
    
                productos.forEach(producto => {
                    cuentaProductos = cuentaProductos + producto[1]; 
                })
                row.cantProductos = cuentaProductos;
    
                productos.forEach(producto => {
                    cuentaFacturado = cuentaFacturado + (producto[0].precioVenta * producto[1]); 
                })
                row.TotalFacturado = cuentaFacturado;
    
               rowsActualizados.push(row)
    
            });
            setRowsInicial(rowsActualizados)
    },[productos, ventas, productosVendidos])


    function GetProductosPorVenta(num){
        let productosPorVenta = [];
        
        productosVendidos.forEach(prod => {
            if(prod.idVenta == num){
                let stockVendido = prod.stock;
                productos.forEach(prodReal => {
                    if(prodReal.id == prod.idProducto){
                        productosPorVenta.push([prodReal, stockVendido])
                    }
                });
            }
        });

        return productosPorVenta;
    }

    function OnClickVerDetalle(){
        alert("PROXIMAMENTE")
    }
    return (
        <>
            <h2>Reportes</h2>
            <Grid margin={2}>
                <Card>
                    <CardContent>
                        <Typography textAlign={'left'} variant='h5'>Reporte de Ventas</Typography><br />
                        <Grid textAlign={'start'}><Button variant="contained" startIcon={<VisibilityIcon />} onClick={OnClickVerDetalle} disabled={rowClicked[0] == undefined}>Ver Detalle</Button></Grid>
                        <Box py={4}>
                            <div style={{ height: 400, width: "100%" }}>
                                <DataGrid
                                    hideFooterSelectedRowCount
                                    showCellRightBorder
                                    columns={columns}
                                    components={{
                                        Toolbar: CustomToolbar,
                                    }}
                                    pageSize={5}
                                    rows={rowsInicial}
                                    rowsPerPageOptions={[5]}
                                    onRowClick={onRowClick}
                                />
                            </div>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

        </>
    );
}

const CustomToolbar = () => {
    return (
        <>
            <GridToolbarContainer>
                <GridToolbarFilterButton />
                <GridToolbarExport />
            </GridToolbarContainer>
        </>
    );
};