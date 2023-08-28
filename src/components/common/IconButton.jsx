import React from 'react';
import styles from './Common.module.css';

export default function IconButton({
  children,
  type,
  className,
  style,
  onClick,
}) {
  return (
    <button
      type={type ?? 'button'}
      className={`${className} ${styles.iconButton}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
