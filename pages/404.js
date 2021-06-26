import React from "react";
import PageLayout from "../components/pageLayout";
import Categories from "../components/categories";
import * as Api from "../api/api";

export default function Error({ categoryList }) {
    return (
        <PageLayout keywords={'error page'}>
          <>
            <Categories categoryList = { categoryList }/>
            <h1>
              This page does not exist...
            </h1>
          </>
        </PageLayout>
    )
};

export async function getStaticProps(context) {
  const categoryList = await Api.getCategories();

  return {
    props: {categoryList},
  }
}