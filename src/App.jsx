import { useContext } from 'react';
import './App.css';
import AppHeader from './components/layout/AppHeader';
import AppMain from './components/layout/AppMain';
import { DarkModeContext } from './context/DarkModeContext';
import { TodoListProvider } from './context/TodoListContext';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <TodoListProvider>
        <AppHeader />
        <AppMain />
      </TodoListProvider>
    </div>
  );
}

export default App;
