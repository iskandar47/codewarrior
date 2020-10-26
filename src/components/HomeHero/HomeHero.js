import React from 'react';
import {Grid} from '@material-ui/core';
import useStyles from "./style.js"
import HeroCard from "./HeroCard"


export default function HomeHero() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <HeroCard  xs={12} sm={5} md={4} lg={4} />
        <HeroCard  xs={12} sm={7} md={8} lg={8} />
      </Grid>
      <Grid container spacing={3}>
        <HeroCard xs={12} sm={7} md={8} lg={8} />
        <HeroCard xs={12} sm={5} md={4} lg={4} />
      </Grid>
    </div>
  );
}