const CATEGORY_CREATE = 'Category/ADD';
const CATEGORY_UPDATE = 'Category/UPDATE';
const CATEGORY_DESTROY = 'Category/DELETE';

export function createCategory(category) {
  return {
    type: CATEGORY_CREATE,
    payload: category,
  };
}

export function updateCategory(category) {
  return {
    type: CATEGORY_UPDATE,
    payload: category,
  };
}

export function destroyCategory(category) {
  return {
    type: CATEGORY_DESTROY,
    payload: category,
  };
}