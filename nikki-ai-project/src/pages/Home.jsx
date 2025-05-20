import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>홈 화면</h1>
      <Link to="/summary">서머리로 이동</Link>
    </div>
  );
}

export default Home;