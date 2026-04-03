import { Link } from "react-router-dom";
import { useDashboardViewModel } from "../../viewmodels/useDashboardViewModel";
import Sidebar from "../layout/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import MetricsGrid from "./components/MetricsGrid";
import FieldMapCard from "./components/FieldMapCard";
import TubeStatusCard from "./components/TubeStatusCard";
import SeedRateChartCard from "./components/SeedRateChartCard";
import AlertsCard from "./components/AlertsCard";
import AnalyticsOverviewCard from "./components/AnalyticsOverviewCard";

export default function DashboardPage() {
  const {
    header,
    metrics,
    seedRateData,
    tubePerfData,
    tubeStatuses,
    alerts,
    analytics,
  } = useDashboardViewModel();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="flex justify-between items-start mb-6">
          <DashboardHeader header={header} />

          <Link
            to="/sessions"
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
          >
            View Sessions
          </Link>
        </div>

        <MetricsGrid metrics={metrics} />

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 flex flex-col gap-6">
            <FieldMapCard />
            <TubeStatusCard tubeStatuses={tubeStatuses} />
            <SeedRateChartCard data={seedRateData} />
          </div>

          <div className="flex flex-col gap-6">
            <AlertsCard alerts={alerts} />
            <AnalyticsOverviewCard
              analytics={analytics}
              tubePerfData={tubePerfData}
            />
          </div>
        </div>
      </main>
    </div>
  );
}