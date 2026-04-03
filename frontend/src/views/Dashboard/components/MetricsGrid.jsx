export default function MetricsGrid({ metrics }) {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-600 font-medium">{metric.label}</p>
          <h2 className="text-2xl font-bold text-gray-900">{metric.value}</h2>
        </div>
      ))}
    </div>
  );
}