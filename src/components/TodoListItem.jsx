import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './TodoListItem.module.css';
import IconButton from './common/IconButton';
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsCheckLg,
  BsXLg,
} from 'react-icons/bs';
import { TodoListContext } from '../context/TodoListContext';

export default function TodoListItem({ index, todo }) {
  const { updateTodo, deleteTodo } = useContext(TodoListContext);
  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState();
  const editInputRef = useRef();

  useEffect(() => {
    if (editMode) {
      editInputRef.current.focus();
    }
  }, [editMode]);

  const handleChange = (e) =>
    setEditTodo((todo) => ({ ...todo, title: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo({ ...todo, ...editTodo });
    toggleMode();
  };
  const toggleMode = () => setEditMode((mode) => !mode);
  return (
    <li className={`${styles.item} ${editMode ? styles.edit : ''}`}>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            ref={editInputRef}
            type="text"
            className="todo-textbox"
            value={editTodo.title}
            onChange={handleChange}
          />
          <IconButton type="submit" className={`icon-btn ${styles.button}`}>
            <BsCheckLg height={13} width={13} color="red" strokeWidth={1.5} />
          </IconButton>
          <IconButton
            className={`icon-btn ${styles.button}`}
            onClick={() => {
              setEditTodo(undefined);
              toggleMode();
            }}
          >
            <BsXLg height={13} width={13} color="blue" strokeWidth={1.5} />
          </IconButton>
        </form>
      ) : (
        <div>
          <input
            type="checkbox"
            id={`checkbox${index + 1}`}
            className="todo-checkbox"
            checked={todo.completed}
            onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
          />
          <label
            htmlFor={`checkbox${index + 1}`}
            title={todo.title}
            className="todo-title"
          >
            {todo.title}
          </label>
          <IconButton
            className={`icon-btn ${styles.button}`}
            onClick={() => {
              setEditTodo(todo);
              toggleMode();
            }}
          >
            <BsFillPencilFill />
          </IconButton>
          <IconButton
            className={`icon-btn ${styles.delete}`}
            onClick={() => deleteTodo(todo.uid)}
          >
            <BsFillTrashFill />
          </IconButton>
        </div>
      )}
    </li>
  );
}
