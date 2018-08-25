import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './dashboard.js';
import store from '../lib/store.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/" component={Dashboard} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;