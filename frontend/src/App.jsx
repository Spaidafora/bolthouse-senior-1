import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./views/Dashboard/DashboardPage";
import SessionListPage from "./views/Sessions/SessionListPage";
import SessionDetailsPage from "./views/Sessions/SessionDetailsPage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/sessions" element={<SessionListPage />} />
        <Route path="/sessions/:sessionId" element={<SessionDetailsPage />} />
      </Routes>
    </Router>
  );
}