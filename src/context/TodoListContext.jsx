import { createContext, useCallback, useMemo, useState } from 'react';
import { useImmer } from 'use-immer';

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [todoList, updateTodoList] = useImmer(
    () => getFromLocalStorage() ?? [],
  );
  const [condition, setCondition] = useState(null);

  // add single todo
  const addTodo = useCallback(
    (todo) => {
      updateTodoList((todoList) => {
        todoList.push(todo);
        saveToLocalStorage(todoList);
      });
    },
    [updateTodoList],
  );
  // update single todo
  const updateTodo = useCallback(
    ({ uid, title, completed }) => {
      updateTodoList((todoList) => {
        const index = todoList.findIndex((todo) => todo.uid === uid);
        if (index > -1) {
          todoList.splice(index, 1, { uid, title, completed });
          saveToLocalStorage(todoList);
        }
      });
    },
    [updateTodoList],
  );
  // delete single todo
  const deleteTodo = useCallback(
    (uid) => {
      updateTodoList((todoList) => {
        const index = todoList.findIndex((todo) => todo.uid === uid);
        if (index > -1) {
          todoList.splice(index, 1);
          saveToLocalStorage(todoList);
        }
      });
    },
    [updateTodoList],
  );

  const setFilterCondition = useCallback(
    (condition) => setCondition(condition),
    [],
  );
  const filteredTodoList = useMemo(() => {
    if (!condition) {
      return todoList;
    } else {
      return todoList.filter(condition);
    }
  }, [todoList, condition]);
  return (
    <TodoListContext.Provider
      value={{
        todoList, // - 모든 todoList
        filteredTodoList, // - 특정 조건으로 필터링된 todoList
        addTodo, // - todoList 추가
        updateTodo, // - todoList 변경
        deleteTodo, // - todoList 삭제
        setFilterCondition, // - 필터 조건 세팅
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
}

function saveToLocalStorage(todoList) {
  localStorage.setItem('todo', JSON.stringify(todoList));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem('todo'));
}
