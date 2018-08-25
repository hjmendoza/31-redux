import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './category-form.js';

export default class CategoryItem extends Component {

  state = {
    editing: false
  };

  showEditForm = () => {
    this.setState({ editing: true })
  }

  updateCategory = (category) => {
    this.setState({
      editing: false
    });
    this.props.onComplete(category);
  }

  destroyCategory = () => {
    this.props.onDelete(this.props.category);
  }


  render() {
    return (
      <div> 
      <span onClick={this.showEditForm}>{this.props.category.name}</span>
      <br/>
      <span>${this.props.category.budget}</span>
      <button onClick={this.destroyCategory}>destroy</button>
      <br/>
      {this.state.editing && <CategoryForm onComplete={this.updateCategory} buttonText="update" category={this.props.category} />}
      </div>
    );
  }
}

CategoryItem.propTypes = {
  onComplete: PropTypes.func,
  onDelete: PropTypes.func,
  category: PropTypes.object,
}