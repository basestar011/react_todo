import React from 'react';
import styles from './AppHeader.module.css';
import IconButton from '../common/IconButton';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

export default function AppHeader() {
  return (
    <header className={`${styles.header}`}>
      <IconButton className={`mode ${styles.mode}`}>
        {/* 다크모드 시 */}
        <BsFillSunFill />
        {/* 라이트모드 시 */}
        {/* <BsFillMoonFill /> */}
      </IconButton>
      {/* 클릭 시 li에 .active 추가 */}
      <ul className={`tab-list ${styles.list}`}>
        <li>전체</li>
        <li>해야할 일</li>
        <li>완료!</li>
      </ul>
    </header>
  );
}
