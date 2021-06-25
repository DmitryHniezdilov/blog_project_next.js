import React from 'react';
import Link from '../link';
import { Container, Box, IconButton, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './styles.module.css';

const Index = () => {

  return (
    <footer className = { styles.footer }>
      <Container maxWidth = 'lg'>
        <Typography
          gutterBottom
          align = 'center'
          variant = 'h6'>
          Footer
        </Typography>
        <Box
          align = 'center'>
          <Typography
            color = 'textSecondary'
            component = 'span'
            variant = 'subtitle1'>
            Test Blog on Next.js by Dmitry Hniezdilov:&nbsp;
          </Typography>
          <IconButton
            component = { Link }
            href = '#'
            rel = 'noreferrer'
            size = 'small'
            style = {{color: '#d1d5da'}}
            target = '_blank'>
            <GitHubIcon />
          </IconButton>
        </Box>

      </Container>
    </footer>
  );
};

export default Index;