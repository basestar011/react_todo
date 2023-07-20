import React from 'react';
import styles from './Common.module.css';

export default function IconButton({ children, className, style }) {
  return (
    <button className={`${className} ${styles.iconButton}`} style={style}>
      {children}
    </button>
  );
}
