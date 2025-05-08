import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Home from './routes/Home';
// import Menu from './routes/Menu'; // 나중에 만들 메뉴 페이지

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
      </Routes>
    </Router>
  );
};

export default App;