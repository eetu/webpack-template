import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/app';

import './index.css';

ReactDOM.render(
  <App text={process.env.MESSAGE} />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./index', () => {
    // accept hot reload
  });
}

export default App;
