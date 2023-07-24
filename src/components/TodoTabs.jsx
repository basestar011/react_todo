import React from 'react';
import styles from './TodoTabs.module.css';
import TodoTabItem from './TodoTabItem';

export default function TodoTabs() {
  return (
    <ul className={`tab-list ${styles.list}`}>
      {[
        { title: '전체' },
        {
          title: '할 일',
          condition: () => (todo) => !todo.completed,
        },
        {
          title: '완료!',
          condition: () => (todo) => todo.completed,
        },
      ].map((tab, index) => (
        <TodoTabItem
          className={index === 0 ? 'active' : ''}
          key={index}
          index={index}
          title={tab.title}
          condition={tab.condition ?? (() => (todo) => true)}
        />
      ))}
    </ul>
  );
}
