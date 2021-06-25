import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Grid, Card, CardActionArea, CardContent, Hidden} from '@material-ui/core';
import Image from 'next/image';
import Link from '../link';
import styles from './styles.module.css';

const FeaturedPost = ({blog}) => {
    const { image, published_at, title, id } = blog;
    const { hash: imageHash, ext: imageExt} = image[ 0 ] || {};
    const dateNormalize = new Date(published_at).toDateString();

    return (
        <Grid
            item
            md = { 6 }
            xs = { 12 }>
            <CardActionArea
                underline = 'none'
                component = { Link }
                href = { `/blogs/${id}` }>
                <Card className = { styles.card }>
                    <div className = { styles.cardDetails }>
                        <CardContent>
                            <Typography
                                component = 'h2'
                                variant = 'h5'>
                                {title}
                            </Typography>
                            <Typography
                                color = 'textSecondary'
                                variant = 'subtitle1'>
                                {dateNormalize}
                            </Typography>
                            <Typography
                                color = 'primary'
                                variant = 'subtitle1'>
                                Continue reading...
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <div className = { styles.cardMedia }>
                            <Image
                              src= { `/img/${imageHash}${imageExt}` }
                              alt= { `Alt to image blog "${title}"` }
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                            />
                        </div>
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    );
};

FeaturedPost.prototype = {
    blog: PropTypes.object,
};

export default FeaturedPost;
