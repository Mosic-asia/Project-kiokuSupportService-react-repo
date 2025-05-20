import { useLocation } from 'react-router-dom';
import '../styles/JournalDetail.css';

function JournalDetail({ date, content, backgroundColor }) {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>
                {date}の日記
            </h2>
            <div
                style={{
                    backgroundColor: backgroundColor || '#ECF6EA',
                    padding: '20px',
                    borderRadius: '12px',
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.6',
                    fontSize: '16px',
                    fontWeight: '500'
                }}
            >
                {content}
            </div>
        </div>
    );
}


export default JournalDetail;
