import { createContext, useCallback, useMemo, useState } from 'react';
import { useImmerReducer } from 'use-immer';
import todoListReducer from '../reducer/todoList-reducer.js';

export const TodoListContext = createContext();

export function TodoListProvider({ children }) {
  const [todoList, dispatch] = useImmerReducer(
    todoListReducer,
    [],
    () => getFromLocalStorage() ?? [],
  );
  const [condition, setCondition] = useState(null);

  // add single todo
  const addTodo = useCallback(
    (todo) => dispatch({ type: 'add', todo }),
    [dispatch],
  );
  // update single todo
  const updateTodo = useCallback(
    ({ uid, title, completed }) =>
      dispatch({ type: 'update', uid, title, completed }),
    [dispatch],
  );
  // delete single todo
  const deleteTodo = useCallback(
    (uid) => dispatch({ type: 'delete', uid }),
    [dispatch],
  );

  const setFilterCondition = useCallback(
    (condition) => setCondition(condition),
    [],
  );
  const filteredTodoList = useMemo(() => {
    return condition ? todoList.filter(condition) : todoList;
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

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem('todo'));
}
