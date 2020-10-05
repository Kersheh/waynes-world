import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

import './styles/normalize.scss';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
