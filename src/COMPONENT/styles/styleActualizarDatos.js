import { createStyles, makeStyles } from '@mui/styles';

export default function styleActualizarDatos(){makeStyles(() => createStyles({
    root: {
        display: 'flex',
    },
    marginTextFields: {
        marginBottom: 16,
        padding: '0px 0px 0 0px'
    },
    marginTop: {
        marginTop: 40,
        padding: '0px 0px 0 0px'
    },
    paddingLR: {
        margin: '16px 0px 0 0px',
        padding: '0 5px 0 5px',
        
    },
    marginLeft: {
        margin: '0px 0px 0px 20px'
    },
    marginRight: {
        margin: '0px 20px 0px 0px'
    },
    link: {
        fontSize: 15,
        color: '#757575',
        cursor: 'pointer'
    },
    subTitle:{
        margin: "25px",
    },
    subTitle2:{
        margin: "25px 0px 0px 25px"
    },
    subTitle3:{
        margin: "5px 25px 0px 25px",
    },
    buttonAddGroupFamily:{
        margin: '25px -5px 0 25px',
        padding: '0 5px 0 5px',
        width:"20px",
        float:'right',
 
    },
    buttonAddPhoto:{
        margin: "10px",
        padding:"00px",
        width:"20px",
        float:'left'
    },
    errorMessage: {
        margin: "15px",
        color: 'red',
        fontSize: 12,
    },
    buttonEnviar:{
        margin: "15px",
        padding:"00px",
        width:"20px",
        float:'right',
        display: 'flex',
        justifyContent:'center',
    },
    TextRed:{
        color:"#d71920 !important",
        fontSize: "19px !important",
        fontWeight:"bold",
        marginRight:'0px'
    },
    checkColor:{
        "&>label>span>.MuiIconButton-label":{
            color:"#d71920"
        }
    },
    notClear:{
        "& > div > div > div > div > .MuiAutocomplete-clearIndicator":{
            display:"none"
        }
    },
    paperCard:{
        backgroundColor:"grey"
    }
}))};

