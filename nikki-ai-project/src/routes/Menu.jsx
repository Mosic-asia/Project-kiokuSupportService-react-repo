import React from 'react';
import '../styles/Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu-container">
            {/* 緊急連絡先 */}
            <button className="emergency-contact-button">
                緊急連絡先
            </button>

            {/* 메뉴 아이템 */}
            <div className="menu-grid">
              <Link to="/journal-list">
                <div className="menu-item">
                    <span className="item-text">日記</span>
                </div>
              </Link>
              
              <Link to="/chat">
                <div className="menu-item">
                    <span className="item-text">日記を書く</span>
                </div>
              </Link>

              <Link to="/talk">
                <div className="menu-item">
                    <span className="item-text">トーク</span>
                </div>
              </Link>

              <Link to="#">
                <div className="menu-item">
                    <span className="item-text">予定</span>
                </div>
              </Link>

              <Link to="/my-info">
                <div className="menu-item">
                    <span className="item-text">マイカルて</span>
                </div>
              </Link>
              
              <Link to="#">
                <div className="menu-item">
                    <span className="item-text">設定</span>
                </div>
              </Link>
            </div>
        </div>
    );
};

export default Menu;