import reportWebVitals from './reportWebVitals';
import state from './redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText,
  subscribe,
} from './redux/state';

export let renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderTree(state);
subscribe(renderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
