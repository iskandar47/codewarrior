import {makeStyles} from "@material-ui/core"
export default makeStyles(theme=>({
    /* contact : {
        marginTop: "20vh",
        display : "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
        width : "100%",
        [theme.breakpoints.down("sm")] : {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignCtems: "center",
            width: "100%",
        }
    }, */
    form : {
        display : "flex",
        flexDirection : "column",
        maxWidth : "80%",
        fontFamily : 'Kumbh Sans, sans serif',
        /* [theme.breakpoints.down("sm")]: {
            maxWidth : "80%",
            margin : "42px auto"
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth : "90%",
            margin : "42px auto"
        } */
    },
    input : {
        height : "42px",
        padding: "4px 8px",
        margin: "0px 0px 16px",
        fontSize: "16px",
        fontFamily : 'Kumbh Sans, sans serif',
    },
    label : {
        fontWeight : "600",
        marginBottom : "4px",
    },
    messageArea : {
        height: "110px",
        padding: "4px 8px",
        margin: "0 0 16px",
        fontSize: "16px",
        fontFamily : 'Kumbh Sans, sans serif',
    },
    about :{
       display : "flex",
       flexDirection : "column",
       justifyContent : "center",
       alignItems : "center",
       fontSize : 22,
    },
    identity : {
        textAlign : "center",
        marginBottom : "16px",
    },
    image : {
        width : "150px",
        borderRadius : "50%",
        border : "3px solid #0BCC23",
    },
    skills  :{
        lineHeight : "32px"
    }
}))

