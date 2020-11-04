import React from 'react'
import { Card, CardMedia, CardActionArea, Typography, CardContent, CardActions, Button, Grid } from '@material-ui/core'
import useStyles from "./Styles.js"


function DevProduct({src, price, title, link}) {
  const classes = useStyles()
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root}>
          <CardActionArea classes={{
          root: classes.actionArea,
          focusHighlight: classes.focusHighlight
        }} >
            <CardMedia
              className={classes.cardMedia}
              component="img"
              alt="Contemplative Reptile"
              height="280"
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
            <Button className={classes.cardBtn} size="small" /* variant="outlined" */>
              <a href={link} target="_blank" rel="noreferrer">Order now</a> 
              <i className="fab fa-amazon"></i>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
}

export default DevProduct
