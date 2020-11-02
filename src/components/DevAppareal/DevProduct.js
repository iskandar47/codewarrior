import React from 'react'
import { Card, CardMedia, CardActionArea, Typography, CardContent, CardActions, Button, Grid } from '@material-ui/core'
import useStyles from "./Styles.js"


function DevProduct({src, price, title, link}) {
  const classes = useStyles()
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root}>
          <CardActionArea className={classes.action} >
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="300"
              image={src}
              title={title}
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
              <a style={{textDecoration : "none", color: "blue"}} href={link} target="_blank" rel="noreferrer">Buy from Amazon</a> 
              <i style={{fontSize : 24, marginLeft : 8}} className="fab fa-amazon"></i>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
}

export default DevProduct
