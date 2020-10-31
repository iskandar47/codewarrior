import React, { useContext} from 'react'
import {Grid} from "@material-ui/core"
import "./Products.css"
import { DataContext } from '../../Context'


function Products() {
    const {products, loading} = useContext(DataContext)
    
    console.log(products)
    console.log(loading)
    return (
          <div className="products">
              <Grid>
                <h1>THIS PAGE IS FOR AMAZON PRODUCTS</h1>
              </Grid>
          </div>
    )
}

export default Products
