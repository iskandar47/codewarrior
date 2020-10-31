import React from 'react'
import { Card, CardMedia, CardActionArea, Typography, CardContent, CardActions, Button, Grid } from '@material-ui/core'
import useStyles from "./Styles.js"


function DevProduct({src, price, title}) {
  const classes = useStyles()
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="300"
              image={src}
              title="Contemplative Reptile"
            />
            <CardContent className={classes.cardContent}>
              <p className={classes.price}>{`$ ${price}`}</p>
              <Typography className={classes.title} variant="subtitle1" align="center" component="p">
                {title}
              </Typography>
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
