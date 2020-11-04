import {makeStyles} from "@material-ui/core"
export default makeStyles(theme => ({
    root : {
        height : "30vh",
        width : "100vw",
        backgroundColor : "#FAFAFA",
        borderTop : "1px solid #CCC",
        display : "flex",
        justifyContent : "space-around",
        alignItems : "center",
        [theme.breakpoints.down("xs")] : {
            flexDirection : "column",
        }
    },
    footerIcons : {
        width : "30%",
        display : "flex",
        justifyContent : "space-around",
        fontSize : "48px",
        [theme.breakpoints.down("xs")] : {
            width : "50%",
        }
    },
    footerText : {
        color : "#AAA",
    }
}))