import { useNavigate } from 'react-router-dom';
import DiaryCard from '../components/DiaryCard';
import '../styles/JournalList.css';

function JournalList() {
  const navigate = useNavigate();

  const diaryData = [
    { date: '2025年5月7日', title: '2025年5月7日の日記' },
    { date: '2025年5月8日', title: '2025年5月8日の日記' },
    { date: '2025年5月9日', title: '2025年5月9日の日記' },
    { date: '2025年5月10日', title: '2025年5月10日の日記' },
    { date: '2025年5月10日', title: '2025年5月10日の日記' },
    { date: '2025年5月10日', title: '2025年5月10日の日記' },
    { date: '2025年5月10日', title: '2025年5月10日の日記' },
  ];

  const pastelColors = ['#ECF6EA', '#FEF7C3', '#E5E1F1'];

  return (
    <div className="journal-list-page">
      <div className="diary-list-box">
        {diaryData.map((entry, index) => (
          <DiaryCard
            key={index}
            {...entry}
            backgroundColor={pastelColors[index % pastelColors.length]}
            onClick={() =>
              navigate('/journal-detail', {
                state: {
                  ...entry,
                  backgroundColor: pastelColors[index % pastelColors.length],
                  content: 'API로 받아올 내용입니다\n줄바꿈 테스트용 텍스트입니다.\n다양한 줄의 내용이 있습니다.\n미묘하게 움직이고 있네.\n미묘한 움직임.. 아이고 잠와라 잠오는건 아닌데 너무 피곤해~~',
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
