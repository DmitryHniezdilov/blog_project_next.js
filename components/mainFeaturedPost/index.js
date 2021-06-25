import React from 'react';
import PropTypes from 'prop-types';
import {Paper, Typography, Grid, Link as LinkMui} from '@material-ui/core';
import Image from 'next/image'
import Link from '../link';
import styles from './styles.module.css';

const MainFeaturedPost = ({blog}) => {
  const { title, image, id } = blog;
  const {hash: imageHash, ext: imageExt} = image[ 0 ] || {};

  return (
    <Paper
      className = { styles.mainFeaturedPost }>
      <Image
        src= { `/img/${imageHash}${imageExt}` }
        alt= { `Alt to image blog "${title}"` }
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className = { styles.overlay } />
      <Grid container>
        <Grid
          item
          md = { 6 }>
          <div className = { styles.mainFeaturedPostContent }>
            <Typography
              gutterBottom
              color = 'inherit'
              component = 'h1'
              variant = 'h3'>
              {title}
            </Typography>
            <LinkMui
              component = { Link }
              href = { `/blogs/${id}` }
              variant = 'subtitle1'>
              Continue reading..
            </LinkMui>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

MainFeaturedPost.prototype = {
  blog: PropTypes.object,
};

export default MainFeaturedPost;
