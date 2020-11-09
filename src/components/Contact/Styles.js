import {makeStyles} from "@material-ui/core"
export default makeStyles(theme=>({
    
    form : {
        display : "flex",
        flexDirection : "column",
        maxWidth : "80%",
        fontFamily : 'Kumbh Sans, sans serif',
        height : ""
    },
    input : {
        height : "42px",
        padding: "4px 8px",
        margin: "0px 0px 16px",
        fontSize: "16px",
        fontFamily : 'Kumbh Sans, sans serif',
        boxShadow : "1px 1px 9px #CCC",
        border : "none",
        "&:focus" : {
            outline : "none"
        }
    },
    label : {
        fontWeight : "600",
        marginBottom : "4px",
    },
    messageArea : {
        height: "135px",
        padding: "8px",
        margin: "0 0 16px",
        fontSize: "16px",
        fontFamily : 'Kumbh Sans, sans serif',
        boxShadow : "1px 1px 9px #CCC",
        border : "none",
        "&:focus" : {
            outline : "none"
        }
    },
    about :{
       display : "flex",
       width : "60%",
       margin : "auto",
       flexDirection : "column",
       justifyContent : "center",
       alignItems : "center",
       fontSize : 22,
       /* boxShadow : "1px 1px 9px #CCC",
       borderRadius : "4px", */
    },
    identity : {
        textAlign : "center",
        marginBottom : "16px",
    },
    image : {
        width : "150px",
        borderRadius : "50%",
    },
    skills  :{
        lineHeight : "32px",
        fontSize : "18px",
    },
    btn : {
        color : "#000",
        border : "1px solid #CCC",
        fontFamily : "Kumbh Sans",
        fontWeight : "600",
        paddingTop : "8px",
        fontSize : "18px",
        borderRadius : "0",
    }
}))

