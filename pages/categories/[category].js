import React from 'react';
import {useRouter} from 'next/router';
import { Grid, Typography } from '@material-ui/core';
import PageLayout from '../../components/pageLayout';
import FeaturedPost from '../../components/featuredPost';
import Categories from "../../components/categories";
import {capitalizeFirstLetter} from "../../helpers/utils";
import * as Api from "../../api/api";
import styles from './styles.module.css';

const Category = ({ blogs, categoryList }) => {
  const blogsNormalize = [ ...blogs ].reverse();
  const { query: { category } } = useRouter();

  return (
    <PageLayout keywords={'category page'}>
      <Categories categoryList = { categoryList }/>
      <Typography
        align = 'center'
        className = { styles.categoryTitle }
        variant = 'h5'>
        {`' ${capitalizeFirstLetter(category)} '`}
      </Typography>
      {!!blogsNormalize.length && (
        <Grid
          container
          spacing = { 4 }>
          {blogsNormalize.map((blog) => (
            <FeaturedPost
              blog = { blog }
              key = { blog.id }
            />
          ))}
        </Grid>
      )}
      {!blogsNormalize.length && (
        <Typography
          style = {{marginTop: '16px'}}
          variant = 'h5'>
          No blogs in this category
        </Typography>
      )}
    </PageLayout>
  );
};

export default Category;

export async function getServerSideProps({params}) {
  const blogs = await Api.getBlogsByCategory(params.category);
  const categoryList = await Api.getCategories();

  return {
    props: { blogs, categoryList },
  }
}
