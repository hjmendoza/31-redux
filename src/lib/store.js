import { createStore } from 'redux';
import categoryReducer from '../components/reducer/category-reducer.js';


export default createStore(categoryReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());