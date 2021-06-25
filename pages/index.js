import React from 'react';
import { Grid } from '@material-ui/core';
import PageLayout from "../components/pageLayout";
import * as Api from '../api/api';
import MainFeaturedPost from "../components/mainFeaturedPost";
import FeaturedPost from "../components/featuredPost";
import Categories from "../components/categories";

const Index = ({ blogs, categoryList }) => {
  const blogsNormalize = [ ...blogs ].reverse();
  const mainFuturePost = blogsNormalize[ 0 ];
  const futurePosts = blogsNormalize.slice(1);

  return (
    <PageLayout keywords={'main page'}>
        <Categories categoryList = { categoryList }/>
        { !!mainFuturePost && <MainFeaturedPost blog = { mainFuturePost }/> }
        { !!futurePosts.length && (
          <Grid
            container
            spacing = { 4 }>
            {futurePosts.map((blog) => (
              <FeaturedPost
                blog = { blog }
                key = { blog.id }
              />
            ))}
          </Grid>
        )}
    </PageLayout>
  )
}

export default Index;

export async function getStaticProps(context) {
  const blogs = await Api.getBlogs();
  const categoryList = await Api.getCategories();

  return {
    props: {blogs, categoryList},
  }
}