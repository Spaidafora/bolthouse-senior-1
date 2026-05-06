import { useState, useEffect } from 'react';
import { getActiveSession, getSessions, getRowSummary, getSeedTimeline } from '../services/sessionService.js';
import { getOperatorById } from '../services/operatorService.js';

const BUCKET_MS = 10_000;

const EMPTY = {
  header: { title: '—', operator: '—', status: '—' },
  metrics: [],
  seedRateData: [],
  tubePerfData: [],
  tubeStatuses: [],
  alerts: [],
  analytics: [],
};

function tubeStatus(r) {
  if (r.jam_flag) return { status: '0 Seeds (Jam)', tone: 'red' };
  if (r.dropout_flag) return { status: 'Low Seed', tone: 'yellow' };
  return { status: 'OK', tone: 'green' };
}

function fmtSessionTime(startIso, endIso) {
  if (!startIso) return '—';
  const end = endIso ? new Date(endIso) : new Date();
  const sec = Math.floor((end - new Date(startIso)) / 1000);
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function useDashboardViewModel() {
  const [data, setData] = useState({ ...EMPTY, loading: true, error: null });

  useEffect(() => {
    async function load() {
      let session;
      try {
        session = await getActiveSession();
      } catch {
        const all = await getSessions();
        session = all[0] ?? null;
      }

      if (!session) {
        setData({ ...EMPTY, loading: false, error: null });
        return;
      }

      const [rowSummary, seedTimeline, operator] = await Promise.all([
        getRowSummary(session.sessionId),
        getSeedTimeline(session.sessionId, BUCKET_MS),
        session.operatorId ? getOperatorById(session.operatorId) : Promise.resolve(null),
      ]);

      const totalSeeds = rowSummary.reduce((sum, r) => sum + (r.total_seeds || 0), 0);
      const anomalies = rowSummary.filter(r => r.jam_flag || r.dropout_flag);

      setData({
        loading: false,
        error: null,
        header: {
          title: `${session.cropType ?? 'Seed'} Planting Dashboard`,
          operator: operator?.name ?? '—',
          status: session.status ?? '—',
        },
        metrics: [
          { label: 'Session Time', value: fmtSessionTime(session.startedAt, session.endedAt) },
          { label: 'Total Seeds Detected', value: totalSeeds.toLocaleString() },
          { label: 'Average Rate', value: 'N/A' },
          { label: 'Planter Speed', value: 'N/A' },
        ],
        seedRateData: seedTimeline.map((r, i) => ({
          t: `${i * (BUCKET_MS / 1000)}s`,
          rate: parseFloat((r.total_seeds / (BUCKET_MS / 1000)).toFixed(2)),
        })),
        tubePerfData: rowSummary.map(r => ({
          tube: `T${r.row_number}`,
          seeds: r.total_seeds,
        })),
        tubeStatuses: rowSummary.map(r => ({
          name: `Tube ${r.row_number}`,
          ...tubeStatus(r),
        })),
        alerts: anomalies.map(r =>
          r.jam_flag
            ? { message: `Row ${r.row_number} Jam Detected`, tone: 'red', icon: '🚨' }
            : { message: `Row ${r.row_number} Low Seed Rate`, tone: 'yellow', icon: '⚠' }
        ),
        analytics: [
          { label: 'Total Acres', value: '—' },
          { label: 'Precision Score', value: '—' },
          { label: 'Seed Distribution Accuracy', value: '—' },
        ],
      });
    }

    load().catch(err => setData(prev => ({ ...prev, error: err.message, loading: false })));
  }, []);

  return data;
}
