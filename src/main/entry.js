import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

window.App = {
  render: () => {
    ReactDom.render(
      <App />,
      document.getElementById('contents')
    );
  }
};