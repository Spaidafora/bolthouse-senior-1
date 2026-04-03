import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function AnalyticsOverviewCard({ analytics, tubePerfData }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Analytics Overview</h3>

      <div className="space-y-3">
        {analytics.map((item) => (
          <div key={item.label} className="flex justify-between">
            <span className="text-gray-700 font-medium">{item.label}</span>
            <span className="font-bold text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={tubePerfData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tube" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="seeds" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}