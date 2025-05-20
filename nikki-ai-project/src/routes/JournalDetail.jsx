import { useLocation } from 'react-router-dom';
import '../styles/JournalDetail.css';

function JournalDetail() {
    const { state } = useLocation();
    const { date, content, backgroundColor } = state || {};

    return (
        <div className="journal-detail-page">
            <h2 className="journal-detail-title">{date}の日記</h2>
            <div
                className="journal-content-box"
                style={{
                    backgroundColor: backgroundColor || '#ECF6EA',
                    color: '#000000',
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
