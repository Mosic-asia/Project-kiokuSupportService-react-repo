import React from 'react';
import '../styles/Menu.css';

const Menu = () => {
    return (
        <div className="menu-container">
            {/* 緊急連絡先 */}
            <button className="emergency-contact-button">
                緊急連絡先
            </button>

            {/* 메뉴 아이템 */}
            <div className="menu-grid">
                <div className="menu-item">
                    <span className="item-text">日記</span>
                </div>
                <div className="menu-item">
                    <span className="item-text">日記を書く</span>
                </div>
                <div className="menu-item">
                    <span className="item-text">トーク</span>
                </div>
                <div className="menu-item">
                    <span className="item-text">予定</span>
                </div>
                <div className="menu-item">
                    <span className="item-text">マイカルて</span>
                </div>
                <div className="menu-item">
                    <span className="item-text">設定</span>
                </div>
            </div>
        </div>
    );
};

export default Menu;