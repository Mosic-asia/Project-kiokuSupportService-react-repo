import React from 'react';
import '../styles/DiaryCard.css';

function DiaryCard({ title, backgroundColor }) {
    return (
        <div
            className="diary-card"
            style={{ backgroundColor: backgroundColor || '#ffffff', color: '#000000' }}
        >
            <h3>{title}</h3>
        </div>
    );
}

export default DiaryCard;
