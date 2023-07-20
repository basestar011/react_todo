import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.css';
import TodoListItem from './TodoListItem';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    fetch('data/todo.json')
      .then((res) => res.json())
      .then((todoList) => setTodoList(todoList));
  }, []);

  const handleChange = (index) => {
    setTodoList((prev) => {
      const next = [...prev];
      next.splice(index, 1, {
        ...prev[index],
        completed: !prev[index].completed,
      });
      return next;
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
