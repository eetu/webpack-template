import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';

const App = () => {
  return <div>Hello World!</div>;
};

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept('./index', () => {
    // accept hot reload
  });
}
