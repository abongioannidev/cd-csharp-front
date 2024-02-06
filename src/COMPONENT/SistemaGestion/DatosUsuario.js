import { Typography } from '@mui/material';
import * as React from 'react';
import {
    Grid,
    Card,
    CardContent,
    Button,
    TextField,
} from '@mui/material';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { putUsuario, getUsuarioNombre } from '../redux/actions/UsuarioAction';
import { useHistory } from 'react-router-dom';

export default function DatosUsuario(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const putRespuesta = useSelector((state) => state.usuarioReducer?.putRespuesta);
    const getUsuario = useSelector((state) => state.usuarioReducer?.usuario)
    const[usuario, setUsuario] = useState(props.datosUsuario) 

    const enviarDatos = () => {
        dispatch(putUsuario(usuario))
        alert("Usuario Modificado")
    }


    React.useEffect(() => {
        if(usuario.id == 0){
            dispatch(getUsuarioNombre(props.datosUsuario.nombreUsuario))
        }
    },[usuario])

    const onChangeUsuario = (e) => {
        const { name, value } = e.target;
        setUsuario({...usuario, [name]: value})
    };

    return (
        <>
            <Card >
                <CardContent className="paperCard" >
                    <h2>Datos del Usuario</h2>
                    <Grid container spacing={2} marginTop={5}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} md={12} container
                                direction="row"
                                justifyContent="space-evenly"
                                alignItems="flex-start">
                                <Grid item>
                                    <Card style={{ backgroundColor:"#F2EBFF"}}>
                                        <Typography>Datos de Identidad</Typography>
                                        <Grid margin={5}>
                                            <TextField disabled
                                                name='id'
                                                type="number"
                                                id="outlined-basic"
                                                label="Id"
                                                variant="outlined"
                                                value={usuario.id}
                                                InputLabelProps={{ shrink: true }}
                                                onChange={onChangeUsuario}
                                            />
                                        </Grid>

                                        
                                        <Grid margin={5}>
                                            <TextField name="mail"
                                                id="outlined-basic"
                                                label="Mail"
                                                variant="outlined"
                                                required={true}
                                                value={usuario.mail}
                                                InputLabelProps={{ shrink: true }}
                                                onChange={onChangeUsuario}
                                            />
                                        </Grid>
                                    </Card>
                                </Grid>


                                <Grid item >
                                    <Card style={{ backgroundColor:"#F2EBFF"}}>
                                        <Typography>Datos de Nombre</Typography>
                                        <Grid margin={5} >
                                            <TextField name="nombre"
                                                id="outlined-basic"
                                                label="Nombre"
                                                variant="outlined"
                                                value={usuario.nombre}
                                                InputLabelProps={{ shrink: true }}
                                                onChange={onChangeUsuario} />
                                        </Grid>
                                        <Grid margin={5}>
                                            <TextField name="apellido"
                                                id="outlined-basic"
                                                label="Apellido"
                                                variant="outlined"
                                                value={usuario.apellido}
                                                InputLabelProps={{ shrink: true }}
                                                onChange={onChangeUsuario}
                                            />
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card style={{ backgroundColor:"#F2EBFF"}}>
                                        <Typography>Datos de Cuenta</Typography>
                                        <Grid margin={5}>
                                            <TextField name="nombreUsuario"
                                                id="outlined-basic"
                                                label="Nombre de usuario"
                                                variant="outlined"
                                                required={true}
                                                value={usuario.nombreUsuario}
                                                InputLabelProps={{ shrink: true }}
                                                onChange={onChangeUsuario}
                                            />
                                        </Grid>
                                        <Grid margin={5}>
                                            <TextField
                                                name="contraseña"
                                                id="outlined-basic" label="Contraseña"
                                                variant="outlined"
                                                value={usuario.contraseña}
                                                InputLabelProps={{ shrink: true }}
                                                onChange={onChangeUsuario}
                                            />
                                        </Grid>
                                    </Card>
                                </Grid>


                            </Grid>
                            <br />
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <Grid container justifyContent="center">
                                <Button id="btn" color="primary" variant="contained"
                                    /* disabled={!formValido } */
                                    onClick={enviarDatos}
                                    className={`btn-primary`} >
                                    Actualizar
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}