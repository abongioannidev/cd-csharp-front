import { Grid, Typography, I, ListItem, Card, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { color, height, sizeHeight, textAlign, width } from '@mui/system';
import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import {Usuario} from "../SistemaGestion/Models/Models.tsx"
import { getUsuarioNombre } from '../redux/actions/UsuarioAction';
import { useLocation } from "react-router";



const theme = createTheme()

const useStyles = makeStyles((theme) => ({
    root: {},
    tipo1: {
        fontFamily: 'fantasy',
        color: 'grey',
        fontSize: '300%',
        textAlign: 'center'
    },
    tipo2: {
        fontFamily: 'cursive'
    }
}))

export default function Inicio(props) {
    const classes = useStyles();
    const location = useLocation();
    const dispatch = useDispatch();
    const getUsuario = useSelector((state) => state.usuarioReducer?.usuario)
    const [usuario, setUsuario] = React.useState(new Usuario())

    React.useEffect(() => {
        if(getUsuario.id > 0){
          setUsuario(getUsuario)
        }
    }, [getUsuario]);

    React.useEffect(() => {
        dispatch(getUsuarioNombre(location.pathname.substring(location.pathname.search("Home") + 5)))
    },[])
    

    function onClickBoton(num){
        props.setOpcion(num);
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container xl={12} 
                className={classes.Grid}
                boxShadow='0px 0px 30px -15px #757575'
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Typography className={classes.tipo1} textAlign='end'>Hola {usuario.nombre} {usuario.apellido}, Bienvenido a tu cuenta</Typography>
                </Grid>

                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item margin={5}>
                        <Grid margin={2}>
                            <Card sx={{ minWidth: 275,  minHeight: 150}}>
                                <AccountCircleIcon fontSize='large' />
                                <Typography variant='h4'>Usuario</Typography>
                                <Button variant="contained" onClick={() =>{onClickBoton(4)}}>Ingresar</Button>
                            </Card>
                        </Grid>
                        <Grid margin={2}>
                            <Card sx={{ minWidth: 275,  minHeight: 150}}>
                                <ShoppingCartIcon fontSize='large' />
                                <Typography variant='h4'>Productos</Typography>
                                <Button variant="contained" onClick={() =>{onClickBoton(1)}}>Ingresar</Button>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid item margin={5}>
                        <Grid margin={2}>
                            <Card sx={{ minWidth: 275,  minHeight: 150}}>
                                <BarChartIcon fontSize='large' />
                                <Typography variant='h4'>Reportes</Typography>
                                <Button variant="contained" onClick={() =>{onClickBoton(3)}}>Ingresar</Button>
                            </Card>
                        </Grid>
                        <Grid margin={2}>
                            <Card sx={{ minWidth: 275,  minHeight: 150}}>
                                <PointOfSaleIcon fontSize='large' />
                                <Typography variant='h4'>Ventas</Typography>
                                <Button variant="contained" onClick={() =>{onClickBoton(2)}}>Ingresar</Button>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>)
}