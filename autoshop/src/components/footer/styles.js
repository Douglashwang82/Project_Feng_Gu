import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    footer: {
        background:"black",
        width: "100%",
        height:"500px",
        marginTop:"-100px",
        marginBottom:"-100px",
        zIndex:"1",
        paddingBottom:"50px",
        paddingTop:"50px",
    },
    cb:{
        position:"relative",
        zIndex:"2",
    },
    btn: {
        background:"white",
    },
    section1:{
        paddingTop:"100px",
        display:"grid",
        gridTemplateColumns:"auto auto auto auto",
        columnGap:"50px",
        alignContent:"center",
        justifyContent:"center",
        color:"white",
    }
}
));
