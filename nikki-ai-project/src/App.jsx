import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Summary from './pages/Summary';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </div>
        <BottomNav /> {/* 하단 내비게이션 */}
      </div>
    </Router>
  );
}

export default App;