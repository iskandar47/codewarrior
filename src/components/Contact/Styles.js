import {makeStyles} from "@material-ui/core"
export default makeStyles({
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
})

/* .form {
    display: flex;
    flex-direction: column;
    margin: 64px auto;
    width: 500px;
} */
/* @media screen and (max-width: 560px) {
    .form {
        width: 80%;
        margin: 32px auto;
    }
}
.form input, .form textarea  {
    height: 42px;
    padding: 4px 8px;
    margin: 0 0 16px;
    font-size: 16px;
}
.form textarea {
    height: 72px;
}
.form label {
    font-weight: 600;
    margin-bottom: 4px;
}
.form button {
    height: 48px;
    font-weight: bold;
    color: #FFF;
    background-color: rgb(42, 42, 247);
    border: none;
    font-size: 16px;
    cursor: pointer;
}
.form button:hover {
    background-color: rgb(7, 7, 154);
} */