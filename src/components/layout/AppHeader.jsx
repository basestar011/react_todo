import React, { useContext } from 'react';
import styles from './AppHeader.module.css';
import IconButton from '../common/IconButton';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { DarkModeContext } from '../../context/DarkModeContext';
import TodoTabs from '../TodoTabs';

export default function AppHeader() {
  const { darkMode, toggleMode } = useContext(DarkModeContext);
  return (
    <header className={`${styles.header}`}>
      <IconButton className={`mode ${styles.mode}`} onClick={toggleMode}>
        {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </IconButton>
      <TodoTabs />
    </header>
  );
}
