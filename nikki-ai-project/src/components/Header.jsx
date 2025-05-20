// src/components/Header.jsx
import React from 'react';
import styles from '../styles/Header.module.css';
import HomeIcon from '../assets/home.svg'; // 홈 아이콘 경로 확인 및 수정

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Project 이름</div>
      <div className={styles.homeButton}>
        <img src={HomeIcon} alt="Home" className={styles.homeIcon} />
      </div>
      <div className={styles.user}>
        {/* 사용자 관련 정보 또는 아이콘 */}
        {/* <img src="/user-icon.png" alt="User" className={styles.userIcon} /> */}
      </div>
    </header>
  );
};

export default Header;