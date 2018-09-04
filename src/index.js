import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import PostIndex from './components/post_index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App /> */}
    <BrowserRouter>
      <div>
        <Route path="/" component={PostIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
