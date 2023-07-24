import React, { useContext } from 'react';
import styles from './TodoList.module.css';
import TodoListItem from './TodoListItem';
import { TodoListContext } from '../context/TodoListContext';

export default function TodoList() {
  const { filteredTodoList } = useContext(TodoListContext);
  return (
    <article className={styles.listWrapper}>
      <ul className={`todo-list ${styles.list}`}>
        {filteredTodoList.map((todo, index) => (
          <TodoListItem key={todo.uid} index={index} todo={todo} />
        ))}
      </ul>
    </article>
  );
}
