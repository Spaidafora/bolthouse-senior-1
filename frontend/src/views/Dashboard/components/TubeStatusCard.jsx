function getTubeStatusClass(tone) {
  if (tone === "red") return "bg-red-500";
  if (tone === "yellow") return "bg-yellow-500";
  return "bg-green-600";
}

export default function TubeStatusCard({ tubeStatuses }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Live Tube Status</h3>

      <div className="grid grid-cols-6 gap-4">
        {tubeStatuses.map((tube) => (
          <div
            key={tube.name}
            className={`p-4 rounded-lg text-center font-semibold text-white ${getTubeStatusClass(
              tube.tone
            )}`}
          >
            <p>{tube.name}</p>
            <p className="text-lg">{tube.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}