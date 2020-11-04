import {makeStyles} from "@material-ui/core"
export default makeStyles(theme=>({
    
    form : {
        display : "flex",
        flexDirection : "column",
        maxWidth : "80%",
        fontFamily : 'Kumbh Sans, sans serif',
        
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

