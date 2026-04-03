import Sidebar from "../layout/Sidebar";
import { useSessionDetailsViewModel } from "../../viewmodels/useSessionDetailsViewModel";
import SessionSummaryCards from "./components/SessionSummaryCards";
import SessionInfoCard from "./components/SessionInfoCard";
import EquipmentInfoCard from "./components/EquipmentInfoCard";
import OperatorInfoCard from "./components/OperatorInfoCard";
import FieldInfoCard from "./components/FieldInfoCard";
import SessionMap from "./components/SessionMap";

export default function SessionDetailsPage() {
  const { session, equipment, operator, field } = useSessionDetailsViewModel();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Session Summary</h1>
          <span className="rounded-full bg-green-100 text-green-700 px-4 py-2 font-medium">
            {session.status}
          </span>
        </div>

        <SessionSummaryCards session={session} />

        <div className="grid grid-cols-2 gap-6 mb-6">
          <SessionInfoCard session={session} />
          <SessionMap />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <EquipmentInfoCard equipment={equipment} />
          <OperatorInfoCard operator={operator} />
          <FieldInfoCard field={field} />
        </div>
      </main>
    </div>
  );
}