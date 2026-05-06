import { useState, useEffect } from 'react';
import { getSessions } from '../services/sessionService.js';

function formatStartedAt(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit', hour12: true,
  });
}

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function mapSession(s) {
  return {
    session_id: s.sessionId,
    field_name: s.fieldName ?? '—',
    crop_type: s.cropType ?? '—',
    tractor_name: s.tractorName ?? '—',
    operator_name: s.operatorName ?? '—',
    started_at: formatStartedAt(s.startedAt),
    duration: formatDuration(s.durationSeconds ?? 0),
    seeds: (s.totalSeeds ?? 0).toLocaleString(),
    status: s.status ?? '—',
  };
}

export function useSessionListViewModel() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSessions()
      .then(data => setSessions(data.map(mapSession)))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { sessions, loading, error };
}
