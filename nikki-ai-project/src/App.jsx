import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Chat from "./routes/Chat";
import Menu from "./routes/Menu";
import MyInfo from "./routes/MyInfo";
import Emergency from "./routes/Emergency";
import Reminder from "./routes/Reminder";
import JournalList from "./routes/JournalList";
import JournalDetail from "./routes/JournalDetail";
import Header from "./components/Header";
import Talk from "./routes/Talk";
import Setting from "./routes/Setting";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* <Routes> 컴포넌트 바깥으로 이동 */}
      <div className="container"> {/* 헤더 아래 콘텐츠 영역 (선택 사항) */}
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/journal-list" element={<JournalList />} />
          <Route path="/journal-detail" element={<JournalDetail />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/my-info" element={<MyInfo />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;