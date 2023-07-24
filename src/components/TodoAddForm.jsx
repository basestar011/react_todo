import React, { useContext, useRef, useState } from 'react';
import styles from './TodoAddForm.module.css';
import { TodoListContext } from '../context/TodoListContext';

export default function TodoAddForm() {
  const [todo, setTodo] = useState({ title: '', completed: false });
  const { addTodo } = useContext(TodoListContext);
  const inputRef = useRef();

  const handleChange = (e) =>
    setTodo((todo) => ({ ...todo, title: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.title) {
      alert('할 일을 입력하세요.');
      inputRef.current.focus();
      return;
    }
    addTodo({ ...todo, uid: new Date().getTime() });
    setTodo({ title: '', completed: false });
  };

  return (
    <form className={`add-form ${styles.form}`} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Add Todo"
        onChange={handleChange}
        value={todo.title}
      />
      <button type="submit">추가</button>
    </form>
  );
}
