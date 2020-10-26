import React from 'react'
import useStyle from "./style.js"
import {Grid} from "@material-ui/core"

function HeroCard({xs, sm, md, lg}) {
    const classes = useStyle()
    return (
        <>
            <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                <div className={classes.homeCard}>
                    <h1>scrambled it to make a type</h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                </div>
            </Grid>
        </>
    )
}

export default HeroCard
