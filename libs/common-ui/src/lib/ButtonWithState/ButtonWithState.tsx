import { ReactNode, useState } from 'react';
import styles from './ButtonWithState.module.css';

/* eslint-disable-next-line */
export interface ButtonWithStateProps {
  children: ReactNode;
}

export function ButtonWithState(props: ButtonWithStateProps) {
  const [counter, setCounter] = useState(1);

  const handleCounter = () => {
    setCounter((prev: number) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleCounter} className={styles['button']}>
        {props.children}
      </button>
      {counter}
    </div>
  );
}

export default ButtonWithState;
