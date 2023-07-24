import React, { useContext } from 'react';
import styles from './TodoListItem.module.css';
import IconButton from './common/IconButton';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import { TodoListContext } from '../context/TodoListContext';

export default function TodoListItem({ index, todo }) {
  const { updateTodo, deleteTodo } = useContext(TodoListContext);
  return (
    <li className={styles.item}>
      <div>
        <input
          type="checkbox"
          id={`checkbox${index}`}
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
        />
        {/* 체크박스 체크 시 label에 styles.completed 클래스 추가 */}
        <label
          htmlFor={`checkbox${index}`}
          title={todo.title}
          className="todo-title"
        >
          {todo.title}
        </label>
      </div>
      <IconButton className={`icon-btn ${styles.button}`} onClick={() => {}}>
        <BsFillPencilFill />
      </IconButton>
      <IconButton
        className={`icon-btn ${styles.delete}`}
        onClick={() => deleteTodo(todo.uid)}
      >
        <BsFillTrashFill />
      </IconButton>
    </li>
  );
}
