import { teal } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        position: 'absolute',
        background: teal[700],
        width: '100%',
        padding: '10px 0px',
        borderTop: '1px solid black',
        bottom: '0',
    },
    container: {
        width: '1200px',
        margin: 'auto',
    },
    link: {
        color: 'white !important',
        marginTop: '5px ',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'flex-end',
        '& .MuiTypography-root': {
            display: 'inherit',
            marginLeft: '5px',
            width: 'fit-content',
        }
    }
})