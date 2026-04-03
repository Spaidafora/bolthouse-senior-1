import Sidebar from "../layout/Sidebar";
import SessionFilters from "./components/SessionFilters";
import SessionTable from "./components/SessionTable";
import { useSessionListViewModel } from "../../viewmodels/useSessionListViewModel";

export default function SessionListPage() {
  const { sessions } = useSessionListViewModel();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Session History</h1>
        <SessionFilters />
        <SessionTable sessions={sessions} />
      </main>
    </div>
  );
}