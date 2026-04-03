import { Link } from "react-router-dom";

function getStatusClass(status) {
  if (status === "Review") return "bg-yellow-100 text-yellow-700";
  if (status === "Live") return "bg-red-100 text-red-700";
  return "bg-green-100 text-green-700";
}

export default function SessionTable({ sessions }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4">Session ID</th>
            <th className="p-4">Field</th>
            <th className="p-4">Crop</th>
            <th className="p-4">Tractor</th>
            <th className="p-4">Operator</th>
            <th className="p-4">Start</th>
            <th className="p-4">Duration</th>
            <th className="p-4">Seeds</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {sessions.map((session) => (
            <tr key={session.session_id} className="border-t hover:bg-gray-50">
              <td className="p-4">
                <Link
                  to={`/sessions/${session.session_id}`}
                  className="font-semibold text-green-700 hover:underline"
                >
                  {session.session_id}
                </Link>
              </td>
              <td className="p-4">{session.field_name}</td>
              <td className="p-4">{session.crop_type}</td>
              <td className="p-4">{session.tractor_name}</td>
              <td className="p-4">{session.operator_name}</td>
              <td className="p-4">{session.started_at}</td>
              <td className="p-4">{session.duration}</td>
              <td className="p-4">{session.seeds}</td>
              <td className="p-4">
                <span className={`rounded-full px-3 py-1 text-sm ${getStatusClass(session.status)}`}>
                  {session.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}