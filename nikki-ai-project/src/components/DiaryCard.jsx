import React from 'react';
import Tag from './Tag';
import '../styles/DiaryCard.css';

function DiaryCard({ date, title, tags }) {
    return (
        <div className="diary-card">
            <p className="diary-date">{date}</p>
            <h3 className="diary-title">{title}</h3>
            <div className="tag-list">
                {tags.map((tag, index) => (
                    <Tag key={index} text={tag} />
                ))}
            </div>
        </div>
    );
}

export default DiaryCard;
