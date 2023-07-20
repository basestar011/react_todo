import React from 'react';
import styles from './TodoAddForm.module.css';

export default function TodoAddForm() {
  return (
    <form className={`add-form ${styles.form}`}>
      <input type="text" placeholder="Add Todo" />
      <button type="submit">추가</button>
    </form>
  );
}
