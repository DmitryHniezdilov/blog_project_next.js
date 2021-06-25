import React from 'react';
import { Box} from '@material-ui/core';
import PageLayout from '../../components/pageLayout';
import SinglePost from '../../components/singlePost';
import styles from '../../styles/blog.module.css';
import * as Api from '../../api/api';
import Categories from "../../components/categories";

const Blog = ({blog, categoryList}) => {

  return (
    <PageLayout keywords={'blog page'}>
      <Categories categoryList = { categoryList }/>
      <Box
        className = { styles.blogWrap }>
        {!!blog && (
          <SinglePost blog = { blog }/>
        )}
      </Box>
    </PageLayout>
  );
};

export default Blog;

export async function getServerSideProps({params}) {
  const blog = await Api.getBlogById(params.id);
  const categoryList = await Api.getCategories();

  return {
    props: { blog, categoryList },
  }
}