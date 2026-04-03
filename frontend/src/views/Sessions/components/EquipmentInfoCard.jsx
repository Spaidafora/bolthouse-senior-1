export default function EquipmentInfoCard({ equipment }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Equipment Info</h3>
      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Tractor:</span> {equipment.tractor_name}</p>
        <p><span className="font-semibold">Planter:</span> {equipment.planter_name}</p>
        <p><span className="font-semibold">Edge Device:</span> {equipment.edge_device}</p>
      </div>
    </div>
  );
}