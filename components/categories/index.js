import React from 'react';
import {Toolbar, Link as LinkMui} from '@material-ui/core';
import Link from '../link';
import {capitalizeFirstLetter} from "../../helpers/utils";
import styles from './styles.module.css';

const Categories = ({ categoryList }) => {
  return (
    <Toolbar
      className = { styles.toolbarSecondary }
      component = 'nav'
      variant = 'dense'>
      {!categoryList.lenght && categoryList.map(({category, id}) => (
        <LinkMui
          noWrap
          className = { styles.toolbarLink }
          color = 'textPrimary'
          component = { Link }
          key = { id }
          href = { `/categories/${category}` }
          variant = 'body2'>
          {capitalizeFirstLetter(category)}
        </LinkMui>
      ))}
    </Toolbar>
  );
};

export default Categories;