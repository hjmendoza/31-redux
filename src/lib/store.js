import { createStore } from 'redux';
import categoryReducer from './category';


export default createStore(categoryReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());