export default function SessionFilters() {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6 grid grid-cols-3 gap-4">
      <input type="date" className="border rounded-lg px-3 py-2" />
      <input type="text" placeholder="Filter by field" className="border rounded-lg px-3 py-2" />
      <input type="text" placeholder="Filter by tractor" className="border rounded-lg px-3 py-2" />
    </div>
  );
}