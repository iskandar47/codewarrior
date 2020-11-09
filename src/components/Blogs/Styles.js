import {makeStyles} from "@material-ui/core"

const mainGray = "#F3F3F3"
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
        borderRight : "1px solid #F3F3F3",
    },
    blogsList : {
        listStyle : "none",
        width : "100%",
        transition : "all 100ms linear"
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
        paddingBottom : "32px",
        margin : "auto",
        fontFamily: 'roboto, sansSerif',
        fontWeight : "300",
        fontSize : "20px",
        letterSpacing : "1px",
        [theme.breakpoints.down("sm")] : {
            fontSize : "16px"
        }
    },
    root : {
        maxWidth : 345,
        height : "100%",
        borderRadius : 0,
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-between",
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
        padding : "18px 0",
        fontFamily : "Kumbh Sans",
    },
    listItem : {
        textAlign : "left",
        padding : "16px 8px",
        marginBottom : "16px",
        fontWeight : "500",
        fontSize : "16px",
        cursor : "pointer",
        "&:hover" : {
            backgroundColor : "#D7D8DA",
            borderRight : "6px solid #E85A4F"
        },
        transition : "all 100ms linear"
    },
    actionArea : {
        "&:hover $focusHighlight" : {
            opacity : "0"
        }
    },
    focusHighlight : {},
    cardAction : {
        "& > *" : {
            color : "#E85A4F"
        }
    }
}))