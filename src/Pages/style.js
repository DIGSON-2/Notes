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
        '&:disabled': {
            color: 'black',
            backgroundColor: '#0000001f !important'
        },
    },
    title: {
        marginBottom: '20px !important'
    },
})