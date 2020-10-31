import React, {useContext} from 'react'
import DevProduct from '../components/DevAppareal/DevProduct'
import { DataContext } from '../Context'
import { Grid } from '@material-ui/core'
import useStyles from "./Styles.js"


function DevAppareal() {
    const context = useContext(DataContext)
    const classes = useStyles()
    
    const displayProducts = context.map((item, i)=>(
        <DevProduct key={i} price={item.price} title={item.title} src={item.image} />
    ));

    return (
            <Grid spacing={3} className={classes.devProducts} container  >
                {displayProducts}
            </Grid>
    )
}

export default DevAppareal
