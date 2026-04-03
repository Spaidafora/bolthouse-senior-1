export default function SessionInfoCard({ session }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Session Info</h3>
      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Session ID:</span> {session.session_id}</p>
        <p><span className="font-semibold">Field:</span> {session.field_name}</p>
        <p><span className="font-semibold">Date:</span> {session.date}</p>
        <p><span className="font-semibold">Crop Type:</span> {session.crop_type}</p>
        <p><span className="font-semibold">Seed Variety:</span> {session.seed_variety}</p>
        <p><span className="font-semibold">Status:</span> {session.status}</p>
      </div>
    </div>
  );
}