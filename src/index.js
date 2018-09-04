import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() { return <div>Hello!</div>}
}

class Goodbye extends React.Component {
  render() { return <div>Goodbye!</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App /> */}
    <BrowserRouter>
      <div>
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />      
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
