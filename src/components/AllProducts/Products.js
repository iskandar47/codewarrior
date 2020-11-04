import React, { useContext} from 'react'
import {Grid} from "@material-ui/core"
/* import "./Products.css" */
import { DataContext } from '../../Context'


function Products() {
    const {products, loading} = useContext(DataContext)
    
    console.log(products)
    console.log(loading)
    return (
          <div style={{height : "60vh"}}>
              <Grid>
                <h1 style={{
                  textAlign : "center", 
                  marginTop : "30vh"
                  }}
                  >
                    COMING SOON...
                </h1>
              </Grid>
          </div>
    )
}

export default Products
