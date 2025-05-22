import React from 'react';
import styles from '../styles/Header.module.css';
import HomeIcon from '../assets/home.svg'; // 실제 홈 아이콘 SVG 경로
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.title}>暖かい日記</span>
      <Link to="/menu" className={styles.homeButton} aria-label="메뉴로 이동">
        <img src={HomeIcon} alt="Home" className={styles.homeIcon} />
      </Link>
    </header>
  );
};

export default Header;
