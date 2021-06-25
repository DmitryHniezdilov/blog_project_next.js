import React from 'react';
import { Box, CssBaseline, Container } from '@material-ui/core';
import Head from 'next/head';
import Footer from '../footer';
import Header from '../header';
import styles from './styles.module.css';

const PageLayout = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"Test Blog on Next.js" + keywords}></meta>
                <title>Test Blog on Next.js</title>
            </Head>
            <Box
                className = { styles.pageLayout }>
                <CssBaseline />

                <Container
                    className = { styles.container }
                    maxWidth = 'lg'>
                    <Header/>

                    <main>{ children }</main>

                </Container>
                <Footer className = { styles.footer }/>
            </Box>
        </>
    )
};

export default PageLayout;
