import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/AppBoot';
import GlobalStyle from './styles/GlobalStyle';

import './styles/fonts.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
