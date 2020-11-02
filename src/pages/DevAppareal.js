import React, {useContext} from 'react'
import DevProduct from '../components/DevAppareal/DevProduct'
import { DataContext } from '../Context'
import { Grid } from '@material-ui/core'
import useStyles from "./Styles.js"
import Loader from "../components/Loader/Loader"


function DevAppareal() {
    const {products, loading} = useContext(DataContext)
    const classes = useStyles()
    
    const displayProducts = products.map((item, i)=>(
        <DevProduct key={i} price={item.price} title={item.title} src={item.image} link={item.lnik} />
    ));
    
    return (
        <>
            <h1 className={classes.header}>Made for developers.</h1>
            <Grid spacing={2} className={classes.devProducts} container >
                {loading ? <Loader /> : displayProducts}
            </Grid>
            
        </>
    )
}

export default DevAppareal
