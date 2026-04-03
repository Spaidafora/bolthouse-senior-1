function getAlertClass(tone) {
  if (tone === "red") return "bg-red-100 text-red-700";
  if (tone === "yellow") return "bg-yellow-100 text-yellow-700";
  return "bg-green-100 text-green-700";
}

export default function AlertsCard({ alerts }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Alerts</h3>

      <div className="flex flex-col gap-3">
        {alerts.map((alert) => (
          <div
            key={alert.message}
            className={`p-3 rounded-lg ${getAlertClass(alert.tone)}`}
          >
            {alert.icon} {alert.message}
          </div>
        ))}
      </div>
    </div>
  );
}