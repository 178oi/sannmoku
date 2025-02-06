import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const handleIncrement = () => {
    setNumber(number + 1);
  };
  const handleDeement = () => {
    setNumber(number - 1);
  };
  const handleIncrement2 = () => {
    setNumber2(number2 + 1);
  };
  const handleDeement2 = () => {
    setNumber2(number2 - 1);
  };
  return (
    <div className={styles.container}>
      <button onClick={handleDeement} className={styles.button}>
        -
      </button>

      <div className={styles.number}>{number}</div>

      <button onClick={handleIncrement} className={styles.button}>
        +
      </button>
      <button onClick={handleDeement2} className={styles.button}>
        -
      </button>

      <div className={styles.number}>{number2}</div>

      <button onClick={handleIncrement2} className={styles.button}>
        +
      </button>
      <div className={styles.number}>{number + number2}</div>
    </div>
  );
};

export default Home;
