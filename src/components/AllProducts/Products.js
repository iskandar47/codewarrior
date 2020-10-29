import React, { useContext} from 'react'
import {Grid} from "@material-ui/core"
import "./Products.css"
import { DataContext } from '../../Context'


function Products() {
    const context = useContext(DataContext)
    
    console.log(context)
    return (
          <div className="products">
              <Grid /*  xs={12} sm={6} md={4} lg={3} */ >
                <h1>hello i'm product</h1>
              </Grid>
          </div>
    )
}

export default Products
