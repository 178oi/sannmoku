import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [block1, setBlock1] = useState(0);
  const [block2, setBlock2] = useState(0);
  const [block3, setBlock3] = useState(0);

  const handleIncrement1 = () => {
    setBlock1(block1 === 0 ? 1 : 0);
  };

  const handleIncrement2 = () => {
    setBlock2(block2 === 0 ? 1 : 0);
  };
  const handleIncrement3 = () => {
    setBlock3(block3 === 0 ? 1 : 0);
  };

  return (
    <div className={styles.container}>
      <div
        style={{ backgroundColor: block1 === 0 ? 'red' : 'blue' }}
        onClick={handleIncrement1}
        className={styles.block}
      />
      <div
        style={{ backgroundColor: block2 === 0 ? 'red' : 'blue' }}
        onClick={handleIncrement2}
        className={styles.block}
      />
      <div
        style={{ backgroundColor: block3 === 0 ? 'red' : 'blue' }}
        onClick={handleIncrement3}
        className={styles.block}
      />
    </div>
  );
};

export default Home;
