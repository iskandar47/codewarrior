import React from 'react'
import {Card, Grid, CardActionArea, CardMedia, Typography, CardContent, Button, CardActions} from "@material-ui/core"
import useStyles from "./Styles"

function BlogCard({title, handleClick}) {
    const classes = useStyles()
    return (
        <Grid item /* style={{margin : "auto"}} */>
            <Card className={classes.root}>
            <CardActionArea onClick={handleClick} >
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                title={title}
                />
                <CardContent>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button onClick={handleClick} size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
        </Grid>
    )
}

export default BlogCard
