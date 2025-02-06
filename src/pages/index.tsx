import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [block1, setBlock1] = useState(0);
  const [block2, setBlock2] = useState(0);
  const [block3, setBlock3] = useState(0);
  return (
    <div className={styles.container}>
      ;
      <div style={{ backgroundColor: block1 === 0 ? 'red' : 'blue' }} className={styles.block} />
      <div style={{ backgroundColor: block1 === 0 ? 'red' : 'blue' }} className={styles.block} />
      <div style={{ backgroundColor: block1 === 0 ? 'red' : 'blue' }} className={styles.block} />
    </div>
  );
};

export default Home;
