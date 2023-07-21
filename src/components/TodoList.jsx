import React, { useEffect } from 'react';
import styles from './TodoList.module.css';
import TodoListItem from './TodoListItem';
import { useImmer } from 'use-immer';

export default function TodoList() {
  const [todoList, updateTodoList] = useImmer([]);
  useEffect(() => {
    fetch('data/todo.json')
      .then((res) => res.json())
      .then((initial) =>
        updateTodoList((todoList) => {
          todoList.push(...initial);
        }),
      );
  }, []);

  const handleChange = (index) => {
    updateTodoList((todoList) => {
      todoList[index].completed = !todoList[index].completed;
    });
  };
  return (
    <article className={styles.listWrapper}>
      <ul className={`todo-list ${styles.list}`}>
        {todoList.map((todo, index) => (
          <TodoListItem
            key={index}
            index={index}
            title={todo.title}
            completed={todo.completed}
            onChange={handleChange}
          />
        ))}
      </ul>
    </article>
  );
}
