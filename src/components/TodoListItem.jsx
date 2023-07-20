import React from 'react';
import styles from './TodoListItem.module.css';
import IconButton from './common/IconButton';
import { BsFillTrashFill } from 'react-icons/bs';

export default function TodoListItem({ index, title, completed, onChange }) {
  return (
    <li className={styles.item}>
      <div>
        <input
          type="checkbox"
          id={`checkbox${index}`}
          className="todo-checkbox"
          checked={completed}
          onChange={() => onChange(index)}
        />
        {/* 체크박스 체크 시 label에 styles.completed 클래스 추가 */}
        <label
          htmlFor={`checkbox${index}`}
          title={title}
          className="todo-title"
        >
          {title}
        </label>
      </div>
      <IconButton className={`icon-trash ${styles.button}`}>
        <BsFillTrashFill />
      </IconButton>
    </li>
  );
}
