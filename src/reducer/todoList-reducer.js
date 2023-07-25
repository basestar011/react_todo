export default function todoListReducer(draft, action) {
  switch (action.type) {
    case 'add': {
      draft.push(action.todo);
      break;
    }
    case 'update': {
      const { uid, title, completed } = action;
      const idx = draft.findIndex((todo) => todo.uid === uid);
      if (idx > -1) draft.splice(idx, 1, { uid, title, completed });
      break;
    }
    case 'delete': {
      const idx = draft.findIndex((todo) => todo.uid === action.uid);
      if (idx > -1) draft.splice(idx, 1);
      break;
    }
    default:
      throw new Error(`알 수 없는 액션 타입 : ${action.type}`);
  }

  saveToLocalStorage(draft);
}

function saveToLocalStorage(todoList) {
  localStorage.setItem('todo', JSON.stringify(todoList));
}
