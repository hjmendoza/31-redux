import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCategory, updateCategory, deleteCategory } from '../lib/category';
import CategoryForm from './category/category-form';
import CategoryItem from './category/category-item';


const Dashboard = props => {
  return (
    <Fragment>
      <CategoryForm onComplete={props.createCategory} buttonText="create" />
      {props.categories.map(category => (
        <li key={category.id}>
          <CategoryItem category={category} onComplete={props.updateCategory} onDelete={props.deleteCategory} />
        </li>
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ categories: state });

const mapDispatchToProps = (dispatch) => ({
  createCategory: category => dispatch(createCategory(category)),
  updateCategory: category => dispatch(updateCategory(category)),
  deleteCategory: category => dispatch(deleteCategory(category)),
});

Dashboard.propTypes = {
  createCategory: PropTypes.func,
  updateCategory: PropTypes.func,
  deleteCategory: PropTypes.func,
  categories: PropTypes.array,
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);