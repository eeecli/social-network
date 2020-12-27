import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

export let renderTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

renderTree(store.getState());
store.subscribe(() => {
  renderTree(store.getState());
});
reportWebVitals();
