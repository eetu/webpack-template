import * as React from 'react';

import styles from './app.css';

interface AppProps {
  text?: string;
}

const App: React.StatelessComponent<AppProps> = (props) => {
  const { text } = props;

  return (
    <div className={styles.container}>
      <div className={styles.text}>{text}</div>
      <div className={styles.testAsset} />
    </div>
  );
};

export default App;