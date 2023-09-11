import { ReactNode } from 'react';
import styles from './Button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className={styles['button']}>{props.children}</button>;
}

export default Button;
