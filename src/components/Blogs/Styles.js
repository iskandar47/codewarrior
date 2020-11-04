import {makeStyles} from "@material-ui/core"

const mainGray = "#FAFAFA"
export default makeStyles(theme =>({
    
    blogsListContainer :{
        backgroundColor : mainGray,
        paddingBottom : "10vh",
        position : "fixed",
        left : "-250px",
        top : "10vh",
        height : "90vh",
        width : "250px",
        transition : "all 200ms linear",
        
    },
    listActive :{
        backgroundColor : mainGray,
        position : "fixed",
        left : "0",
        top : "10vh",
        height : "90vh",
        width : 250,
        transition : "all 200ms linear",
        zIndex : 4,
        borderRight : "1px solid #CCC"
    },
    blogsList : {
        listStyle : "none",
        width : "100%",
        /* margin : "auto", */
    },
    blogPostContainer : {
        backgroundColor : mainGray,
        width : "60%", 
        margin : "auto", 
        lineHeight: 2,
        [theme.breakpoints.down("sm")] : {
            width : "80%",
        }
    },
    blogPost : {
        width : "90%",
        margin : "auto",
        fontFamily: 'Roboto, sansSerif',
        fontWeight : "400",
        fontSize : "22px",
        letterSpacing : "1px",
        [theme.breakpoints.down("sm")] : {
            fontSize : "16px"
        }
    },
    root : {
        maxWidth : 345,
        borderRadius : 0,
        transition : "all 100ms linear",
        '&:hover' : {
            transform : "scale(1.03)",
        },
        boxShadow : "1px 1px 5px #CCC",
    },
    blogGrid : {
        width : "80%", 
        margin : "auto", 
        justifyContent: "center",
        alignContent : "center",
        marginBottom : "10vh",
        [theme.breakpoints.down("sm")] : {
            width : "80%",
        }
    },
    title : {
        padding : "0px 8px",
        fontWeight : "600",
        fontFamily : "Kumbh Sans",
    },
    heading : {
        textAlign : "center", 
        borderBottom : "solid 1px #555",
        marginBottom : "18px",
        fontFamily : "Kumbh Sans",
    },
    listItem : {
        textAlign : "left",
        padding : "16px 8px",
        marginBottom : "16px",
       /*  backgroundColor : "#FFF", */
        fontWeight : "500",
        fontSize : "16px",
        cursor : "pointer",
        /* boxShadow : "1px 1px 5px #CCC", */
        "&:hover" : {
            backgroundColor : "#EEE",
            borderRight : "6px solid red"
        }
    }
}))