import SessionLeafletMap from './SessionLeafletMap.jsx';

export default function SessionMap({ path, boundary }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold text-text-dark mb-4">Session Map</h3>
      <SessionLeafletMap path={path} boundary={boundary} />
    </div>
  );
}