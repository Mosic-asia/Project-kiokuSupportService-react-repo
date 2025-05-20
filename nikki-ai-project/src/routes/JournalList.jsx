import Header from '../components/Header';
import DiaryCard from '../components/DiaryCard';
import '../styles/JournalList.css';

function JournalList() {
  const diaryData = [  // 추후 스프레드시트에서 받아온 데이터로 교체
    {
      date: '2025年5月13日',
      title: '天気がいいから散歩に行った日',
      tags: ['散歩', 'パン屋']
    },
    {
      date: '2025年5月14日',
      title: 'ジムに行って頑張った日',
      tags: ['ジム', '運動']
    }
  ];

  return (
    <div className="journal-list-container">
      <Header />
      <div className="diary-list">
        {diaryData.map((entry, index) => (
          <DiaryCard key={index} {...entry} />
        ))}
      </div>
    </div>
  );
}

export default JournalList;
