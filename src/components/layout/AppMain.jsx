import React from 'react';
import styles from './AppMain.module.css';
import TodoList from '../TodoList';
import TodoAddForm from '../TodoAddForm';

export default function AppMain() {
  return (
    <main className={styles.container}>
      <TodoList />
      <TodoAddForm />
    </main>
  );
}
