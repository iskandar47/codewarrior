import {makeStyles} from "@material-ui/core/styles"

export default makeStyles({
    root : {
        maxWidth: 260,
        margin: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius : "0%",
        transition : "all 100ms linear",
        '&:hover' : {
            transform : "scale(1.03)",
        }
    },
    action : {
        "&:hover" : {
            backgroundColor : "transparent"
        }
    },
    price : {
        backgroundColor : "#3455FF",
        borderRadius : "0px 25px 25px 0px",
        color : "#FFF",
        paddingTop : 4,
        fontFamily: 'Kumbh Sans',
        textAlign: "center",
        marginBottom : "16px",
        marginRight : "8px",
        fontSize : 22,
        transition : "all 100ms linear",
        "&:hover" : {
            marginRight : "0px",
            backgroundColor : "#00A5FF",
        }
    },
    title : {
        padding : "0px 8px",
        fontWeight : "600",
        fontFamily : "Kumbh Sans",
    },
    cardContent : {
        padding : "16px 0px 0px",
    }
})