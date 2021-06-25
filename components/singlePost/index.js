import React from 'react';
import PropTypes from 'prop-types';
import {Typography, CardContent} from '@material-ui/core';
import Image from 'next/image';
import styles from './styles.module.css';

const SinglePost = ({blog}) => {
    const { image, published_at, title } = blog;
    const { hash: imageHash, ext: imageExt } = image[ 0 ] || {};
    const dateString = new Date(published_at).toDateString();
    const dateHours = new Date(published_at).getHours();
    const dateMinutes = new Date(published_at).getMinutes();
    const dateNormalize = `${dateString} ${dateHours}:${dateMinutes}`;

    return (
        <CardContent>
            <Typography
                component = 'h2'
                variant = 'h5'>
                {title}
            </Typography>
            <Typography
                color = 'textSecondary'
                style = {{marginBottom: '12px'}}
                variant = 'subtitle1'>
                {dateNormalize}
            </Typography>
            <div className = { styles.cardMedia }>
              <Image
                src= { `/img/${imageHash}${imageExt}` }
                alt= { `Alt to image blog "${title}"` }
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <Typography
                paragraph
                style = {{marginTop: '12px'}}
                variant = 'subtitle1'>
                {blog.content}
            </Typography>
        </CardContent>
    );
};

SinglePost.prototype = {
    blog: PropTypes.object,
};

export default SinglePost;
