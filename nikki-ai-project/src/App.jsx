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

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/chat" element={<Chat />} />
            <Route path="/journal-list" element={<JournalList />} />
          </Routes>
        </div>
        {/* <BottomNav /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;