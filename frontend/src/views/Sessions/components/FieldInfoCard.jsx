export default function FieldInfoCard({ field }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Field Info</h3>
      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Field Name:</span> {field.name}</p>
        <p><span className="font-semibold">Boundary:</span> {field.boundary}</p>
        <p><span className="font-semibold">Area:</span> {field.area}</p>
      </div>
    </div>
  );
}