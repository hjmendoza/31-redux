import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class CategoryForm extends Component {
  
  constructor(props) {
    super(props);
    this.defaultState = {
        id: null,
        timestamp: '',
        name: '',
        budget: 0,
    };

    const initialState = this.props.category || this.defaultState;

    this.state =  {...initialState};
  }
  
  onSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState });
  };

  onChange = event => {
    const val =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const changedBit = {
      [event.target.name]: val
    };
    this.setState(changedBit);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="name" placeholder="name" value={this.state.name} onChange={this.onChange} />
        <input name="budget" placeholder="budget" type="number" value={this.state.budget} onChange={this.onChange} />
        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  category: PropTypes.object,
}

CategoryForm.defaultProps = {
  category: {
    id: null,
    timestamp: '',
    name: '',
    budget: 0,
  }
}
