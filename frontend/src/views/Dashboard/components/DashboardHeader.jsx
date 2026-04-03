export default function DashboardHeader({ header }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{header.title}</h1>

      <div className="flex gap-4 mt-4">
        <div className="bg-white px-4 py-2 rounded-lg shadow text-gray-800">
          Operator: {header.operator}
        </div>
        <div className="bg-green-600 text-white px-4 py-2 rounded-lg shadow">
          {header.status}
        </div>
      </div>
    </div>
  );
}