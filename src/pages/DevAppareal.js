import React, {useContext} from 'react'
import DevProduct from '../components/DevAppareal/DevProduct'
import { DataContext } from '../Context'
import { Grid } from '@material-ui/core'


function DevAppareal() {
    const context = useContext(DataContext)
    
    const displayProducts = context.map((item, i)=>(
        <DevProduct key={i} price={item.price} title={item.title} src={item.image} />
    ));

    return (
            <Grid spacing={3} style={{marginTop : "20vh"}} container className="products-ui" >
                {displayProducts}
            </Grid>
    )
}

export default DevAppareal
