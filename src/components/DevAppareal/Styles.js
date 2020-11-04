import {makeStyles} from "@material-ui/core/styles"

const mainOrange = "#FF8B3D"
export default makeStyles({
    root : {
        maxWidth: 260,
        margin: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        transition : "all 100ms linear",
        '&:hover' : {
            transform : "scale(1.03)",
        },
        "&:hover $price" : {
            backgroundColor : "#F3F3F3",
        },  
        boxShadow : "1px 1px 3px #CCC",
    },
    price : {
        backgroundColor : "#FFF",
        borderRadius : "25px",
        color : mainOrange,
        paddingTop : 4,
        fontFamily: 'Kumbh Sans',
        textAlign: "center",
        marginBottom : "16px",
        fontSize : 20,
        fontWeight : "600",
        transition : "all 100ms linear",
    },
    actionArea : {
        "&:hover $focusHighlight": {
            opacity: "0"
          },
    },
    focusHighlight : {},
    title : {
        padding : "0px 8px",
        fontWeight : "500",
        fontFamily : 'Roboto, sansSerif',
        lineHeight : "20px",
        color : "#555",
        marginBottom : "6px"
    },
    cardContent : {
        padding : "0px",
    },
    cardBtn : {
        fontFamily : 'kumbh sans, sansSerif',
        boxShadow : "1px 1px 12px #CCC",
        fontWeight : "600",
        fontSize : "14px",
        padding : "8px 12px 4px 12px",
        marginBottom : "12px",
        "&  a" : {
            textDecoration : "none", 
            color: "#333"
        },
        "& i" : {
            fontSize : 22, 
            marginLeft : 8,
            color : mainOrange
        },
        "&:hover" : {
            backgroundColor : mainOrange,
            "&  a" : {
                textDecoration : "none", 
                color: "#FFF"
            },
            "& i" : {
                color : "#000"
            }
        }
    }
})