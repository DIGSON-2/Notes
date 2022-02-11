import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        '& .MuiFormHelperText-root': {
            color: 'red'
        }
    },
    form: {
        '& 	.MuiDialogContent-root': {
            display: 'flex'
        }
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
        width:'1200px',
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    card:{
        padding: '20px',
        width: '200px',
        margin: '30px',
        border: '2px solid purple'
    },
    cardButtons:{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px'
    }
})