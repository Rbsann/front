import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/initializeStore'
import { Provider } from 'react-redux';
import "./index.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
