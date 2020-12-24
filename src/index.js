import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';

export let renderTree = (state) => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} store={store} />,
    document.getElementById('root')
  );
};

renderTree(store.getState());
store.subscribe(() => {
  renderTree(store.getState());
});
reportWebVitals();
