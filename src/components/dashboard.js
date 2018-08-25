import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCategory, updateCategory, destroyCategory } from './action/category-action.js';
import CategoryForm from './category-form.js';
import CategoryItem from './category-item.js';


const Dashboard = props => {
  return (
    <Fragment>
      <CategoryForm onComplete={props.createCategory} buttonText="create" />
      {props.categories.map(category => (
        <li key={category.id}>
          <CategoryItem category={category} onComplete={props.updateCategory} onDelete={props.destroyCategory} />
        </li>
      ))}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({ categories: state });

const mapDispatchToProps = (dispatch) => ({
  createCategory: category => dispatch(createCategory(category)),
  updateCategory: category => dispatch(updateCategory(category)),
  destroyCategory: category => dispatch(destroyCategory(category)),
});

Dashboard.propTypes = {
  createCategory: PropTypes.func,
  updateCategory: PropTypes.func,
  destroyCategory: PropTypes.func,
  categories: PropTypes.array,
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);