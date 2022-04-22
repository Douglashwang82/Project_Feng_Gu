import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@mui/material';

export default makeStyles(() => ({
    carddiv:{
        width:"100%",
        height:"600px",
        margin:"auto",
        background:"#141414",
        marginTop:"-100px",
        zIndex:"2",
        position:"relative",
        borderBottomLeftRadius:"50px",
        borderBottomRightRadius:"50px",
    },
    cardgroup:{
        marginTop:"150px",
    }
}
));
