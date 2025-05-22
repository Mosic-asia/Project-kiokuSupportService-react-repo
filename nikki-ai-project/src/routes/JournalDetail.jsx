import { useParams, useLocation } from 'react-router-dom';
import '../styles/JournalDetail.css';

// 더미 상세 데이터
const dummyDetails = {
  1: {
    title: "A Calm Morning and My Evening Routine",
    summary: "I went for a short walk in the park this morning. The weather was nice, and I enjoyed the fresh air.",
    messages: [
      { text: "I went for a short walk in the park this morning.", reply_text: "That sounds refreshing!", timestamp: "2025-05-07T09:01:00" },
      { text: "Then I had some toast and tea.", reply_text: "Sounds delicious!", timestamp: "2025-05-07T09:05:00" }
    ]
  },
  2: {
    title: "A Rainy Day Reflection",
    summary: "Today it rained all day. I stayed inside and read a book.",
    messages: [
      { text: "It was raining, so I read a book.", reply_text: "Rainy days are perfect for reading!", timestamp: "2025-05-08T10:10:00" }
    ]
  },
  3: {
    title: "Weekend Adventures",
    summary: "I went hiking in the mountains. It was tiring but fun!",
    messages: [
      { text: "I went hiking in the mountains.", reply_text: "That sounds like a great adventure!", timestamp: "2025-05-09T11:20:00" }
    ]
  }
};

function JournalDetail() {
  const { journalId } = useParams();
  const { state } = useLocation();
  const journal = dummyDetails[journalId];

  if (!journal) return <div className="journal-detail-page">No data found.</div>;

  return (
    <div className="journal-detail-page">
      <h2 className="journal-detail-title">{journal.title}</h2>
      <div
        className="journal-content-box"
        style={{
          backgroundColor: state?.backgroundColor || '#ECF6EA',
          color: '#000000',
          padding: '20px',
          borderRadius: '12px',
          whiteSpace: 'pre-wrap',
          lineHeight: '1.6',
          fontSize: '16px',
          fontWeight: '500',
        }}
      >
        {journal.summary}
        <div style={{ marginTop: 16 }}>
          {journal.messages.map((msg, idx) => (
            <div key={idx} style={{ marginBottom: 8 }}>
              <div>{msg.text}</div>
              {msg.reply_text && <div style={{ color: '#888', fontSize: 14 }}>{msg.reply_text}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JournalDetail;
