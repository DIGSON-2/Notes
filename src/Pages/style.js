import { teal } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiFormHelperText-root': {
            color: 'red'
        }
    },
    form: {
        display: 'flex',
        background: 'white',
        flexDirection: 'column',
        padding: '40px',
        width: '400px',
        marginTop: '200px',
        border: '1px solid black',
        borderRadius: '10px ',
        boxShadow: '1px 2px 3px 4px rgba(20,20,20,0.4)', 
        '& .MuiTextField-root': {
            marginBottom: '10px',
        }   
    },
    send: {
        background: `${teal[700]} !important `,
        color: 'white !important',
        marginBottom: '5px',
        '&:disabled': {
            color: 'black',
            backgroundColor: '#0000001f !important'
        },
    },
    title: {
        marginBottom: '20px !important'
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '80px'
    },
    cardGroup:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    cardStyle:{
        padding: '20px',
        width: '200px',
        margin: '30px',
        border: '2px solid purple'
    },

    header:{
        background: teal[500],
        borderBottom: '1px solid black',
        padding: '10px 0px',
        '& div': {
            display: 'flex',
            justifyContent: 'space-between',
            '& .MuiButton-root':{
                color: 'white !important'
            },
            '& .MuiButton-root:hover':{
                color: 'blue !important',
            },
        }
    },
    search: {
        background: 'white',
        borderRadius: '5px'
    },
    cardButtonsGroup:{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    cardButton:{
        marginTop: '10px !important',
        width: '100%',
        paddingTop: '0px'
    },
    conteiner: {
        width: '1200px',
        margin: 'auto'
    },
    errorLabel : {
        color: 'red',
        fontSize: '14px!important'
    }
})