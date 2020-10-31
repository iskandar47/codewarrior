import {makeStyles} from "@material-ui/core/styles"

export default makeStyles({
    root : {
        maxWidth: 300,
        margin: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius : "0%",
    },
    price : {
        backgroundColor : "#0B6623",
        borderRadius : "0px 25px 25px 0px",
        color : "#FFF",
        paddingTop : 4,
        fontFamily: 'Kumbh Sans',
        textAlign: "center",
        marginBottom : "16px",
        marginRight : "8px",
        fontSize : 24,
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