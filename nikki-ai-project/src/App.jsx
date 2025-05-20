import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Chat from "./routes/Chat";
import Menu from "./routes/Menu";
import MyInfo from "./routes/MyInfo";
import Emergency from "./routes/Emergency";
import Reminder from "./routes/Reminder";
import JournalList from "./routes/JournalList";
import JournalDetail from "./routes/JournalDetail";

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