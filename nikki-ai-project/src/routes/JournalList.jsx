import Header from '../components/Header';
import DiaryCard from '../components/DiaryCard';
import '../styles/JournalList.css';

function JournalList() {
  const diaryData = [
    {
      date: '2025年5月7日',
      title: '2025年5月7日の日記',
    },
    {
      date: '2025年5月8日',
      title: '2025年5月8日の日記',
    },
    {
      date: '2025年5月9日',
      title: '2025年5月9日の日記',
    },
    {
      date: '2025年5月10日',
      title: '2025年5月10日の日記',
    },
    {
      date: '2025年5月10日',
      title: '2025年5月10日の日記',
    },
    {
      date: '2025年5月10日',
      title: '2025年5月10日の日記',
    },
    {
      date: '2025年5月10日',
      title: '2025年5月10日の日記',
    },
  ];

  // 파스텔 컬러 순환 적용
  const pastelColors = ['#ECF6EA', '#FEF7C3', '#E5E1F1'];

  return (
    <div className="journal-list-page">
      <Header />
      <div className="diary-list-box">
        {diaryData.map((entry, index) => (
          <DiaryCard
            key={index}
            {...entry}
            backgroundColor={pastelColors[index % pastelColors.length]}
          />
        ))}
      </div>
    </div>
  );
}

export default JournalList;
