export default function SessionSummaryCards({ session }) {
  const cards = [
    { label: "Total Seeds Counted", value: session.total_seeds_counted },
    { label: "Average Spacing", value: session.average_spacing },
    { label: "Average Speed", value: session.average_speed },
    { label: "Total Distance Travelled", value: session.total_distance_travelled },
    { label: "Start / End Time", value: `${session.start_time} - ${session.end_time}` },
    { label: "Total Time", value: session.total_time },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      {cards.map((card) => (
        <div key={card.label} className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-600 font-medium">{card.label}</p>
          <h2 className="text-2xl font-bold text-gray-900">{card.value}</h2>
        </div>
      ))}
    </div>
  );
}