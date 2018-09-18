import * as React from 'react';

import styles from './app.css';

interface AppProps {
  text?: string;
}

const App: React.StatelessComponent<AppProps> = (props) => {
  const { text } = props;

  return <div className={styles.text}>{text}</div>;
};

export default App;
