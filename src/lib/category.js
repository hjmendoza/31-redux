import uuid from 'uuid/v1';

// Action Types
const CATEGORY_CREATE = 'Category/CATEGORY_CREATE';
const CATEGORY_UPDATE = 'Category/CATEGORY_UPDATE'; 
const CATEGORY_DELETE = 'Category/CATEGORY_DELETE';


// Reducer
export default function reducer(state = {categories:[]}, action) {

  const { type, payload } = action;
  
  switch (type) {
  case CATEGORY_CREATE:
    payload.id = uuid();
    payload.timestamp = new Date().getTime();
    return {
      ...state,
      categories: [...state.categories, payload]
    }
  
  case CATEGORY_UPDATE:
    return {
      ...state, 
      categories: state.categories.map(category => category.id === payload.id ? payload : category)
    }
  
  case CATEGORY_DELETE:
    return {
      ...state,
      categories: state.categories.filter(category => category.id !== payload.id)
    } 
  
  default: return state;
  }
}

// Action Creators
export function addCategory(category) {
  return {
    type: CATEGORY_CREATE,
    payload: category
  }
}

export function updateCategory(category) {
  return {
    type: CATEGORY_UPDATE,
    payload: category
  }
}

export function deleteCateogry(category) {
  return {
    type: CATEGORY_DELETE,
    payload: category
  }
}