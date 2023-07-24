import React, { useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';

export default function TodoTabItem({ className, index, title, condition }) {
  const { setFilterCondition } = useContext(TodoListContext);
  const handleClick = (e) => {
    Array.from(e.target.parentNode.children).forEach((tab, tabIndex) => {
      tabIndex === index
        ? tab.classList.add('active')
        : tab.classList.remove('active');
      setFilterCondition(condition);
    });
  };
  return (
    <li className={className} onClick={handleClick}>
      {title}
    </li>
  );
}
