export default function OperatorInfoCard({ operator }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Operator Info</h3>
      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Name:</span> {operator.name}</p>
        <p><span className="font-semibold">Employee Code:</span> {operator.employee_code}</p>
      </div>
    </div>
  );
}