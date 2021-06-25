import React from 'react';
import {Toolbar, Link as LinkMUI, Typography, Grid} from '@material-ui/core';
import Link from '../link';
import styles from './styles.module.css';

const Index = () => {

  return (
    <Toolbar className = { styles.toolbar }>
      <Grid
        container
        alignItems = 'center'
        spacing = { 2 }>
        <Grid
          item
          md = { 5 }
          xs = { 2 }>
        </Grid>
        <Grid
          item
          className = { styles.toolbarTitle }
          md = { 2 }
          xs = { 12 }>
          <LinkMUI
            noWrap
            color = 'textPrimary'
            component = { Link }
            href= '/'
            variant = 'body2'>
            <Typography
              align = 'center'
              color = 'textPrimary'
              component = 'h2'
              display = 'inline'
              variant = 'h5'>
              Test Blog
            </Typography>
          </LinkMUI>
        </Grid>
        <Grid
          item
          align = 'right'
          md = { 5 }
          xs = { 10 }>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default Index;