import React from 'react';
import { Grid } from '@material-ui/core';

function TranslateBox({ children, style: classes }) {
  return (
    <Grid container className={classes.translateBox}>
      {children}
    </Grid>
  );
}

export default TranslateBox;
