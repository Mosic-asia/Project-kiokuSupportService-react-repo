import { useNavigate } from 'react-router-dom';
import DiaryCard from '../components/DiaryCard';
import '../styles/JournalList.css';

const pastelColors = ['#ECF6EA', '#FEF7C3', '#E5E1F1'];

// dummy data
const dummyJournals = [
  { id: 1, start_datetime: "2025-05-07T09:00:00", title: "A Calm Morning and My Evening Routine" },
  { id: 2, start_datetime: "2025-05-08T10:00:00", title: "A Rainy Day Reflection" },
  { id: 3, start_datetime: "2025-05-09T11:00:00", title: "Weekend Adventures" },
];

function formatDateJP(dateStr) {
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}年${d.getDate()}月日`;
}

function JournalList() {
  const navigate = useNavigate();
  const journals = dummyJournals; // APIのかわりにdummyーdata使用

  return (
    <div className="journal-list-page">
      <div className="diary-list-box">
        {journals.map((journal, index) => (
          <DiaryCard
            key={journal.id}
            date={formatDateJP(journal.start_datetime)}
            title={journal.title}
            backgroundColor={pastelColors[index % pastelColors.length]}
            onClick={() =>
              navigate(`/journal-detail/${journal.id}`, {
                state: {
                  journalId: journal.id,
                  backgroundColor: pastelColors[index % pastelColors.length],
                },
              })
            }
          />
        ))}
      </div>
    </div>
  );
}

export default JournalList;
