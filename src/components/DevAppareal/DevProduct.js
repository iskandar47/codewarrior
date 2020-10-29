import React from 'react'
import "./DevProduct.css"
import { Card, CardMedia, CardActionArea, Typography, CardContent, CardActions, Button, Grid } from '@material-ui/core'


function DevProduct({src, price, title}) {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className="card-container">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="300"
              image={src}/* "https://images.unsplash.com/photo-1560253787-9c3babc1fab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" */
              title="Contemplative Reptile"
            />
            <CardContent>
              {/* <Typography align="center" gutterBottom variant="h5" component="h2">
                {`$${price}`}
              </Typography> */}
              <h2>{`$${price}`}</h2>
              <Typography variant="h6" align="center" component="p">
                {title}
              </Typography>
              {/* <h2>{title}</h2> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
}

export default DevProduct
