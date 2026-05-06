import { useState, useEffect } from 'react';
import { getSessionById, getRowSummary } from '../services/sessionService.js';
import { getTractorById } from '../services/tractorService.js';
import { getOperatorById } from '../services/operatorService.js';
import { getFieldById } from '../services/fieldService.js';

const DEFAULT = {
  session: {
    session_id: '', field_name: '—', date: '—', start_time: '—', end_time: '—',
    total_time: '—', crop_type: '—', seed_variety: '—', total_seeds_counted: '—',
    average_spacing: 'N/A', average_speed: 'N/A', total_distance_travelled: 'N/A', status: '—',
  },
  equipment: { tractor_name: '—', planter_name: '—', edge_device: '—' },
  operator: { name: '—', employee_code: '—' },
  field: { name: '—', boundary: '—', area: '—' },
  rowMetrics: [],
};

function fmtDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function fmtTime(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}

function fmtDuration(startIso, endIso) {
  if (!startIso) return '—';
  const end = endIso ? new Date(endIso) : new Date();
  const sec = Math.floor((end - new Date(startIso)) / 1000);
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function rowStatus(r) {
  if (r.jam_flag) return 'Jam';
  if (r.dropout_flag) return 'Low Seed';
  return 'OK';
}

export function useSessionDetailsViewModel(sessionId) {
  const [state, setState] = useState({ ...DEFAULT, loading: true, error: null });

  useEffect(() => {
    if (!sessionId) return;

    async function load() {
      const session = await getSessionById(sessionId);

      const [tractor, operator, field, rowSummary] = await Promise.all([
        session.tractorId ? getTractorById(session.tractorId) : Promise.resolve(null),
        session.operatorId ? getOperatorById(session.operatorId) : Promise.resolve(null),
        session.fieldId ? getFieldById(session.fieldId) : Promise.resolve(null),
        getRowSummary(sessionId),
      ]);

      const totalSeeds = rowSummary.reduce((sum, r) => sum + (r.total_seeds || 0), 0);

      setState({
        loading: false,
        error: null,
        session: {
          session_id: session.sessionId,
          field_name: field?.name ?? '—',
          date: fmtDate(session.startedAt),
          start_time: fmtTime(session.startedAt),
          end_time: session.endedAt ? fmtTime(session.endedAt) : 'In Progress',
          total_time: fmtDuration(session.startedAt, session.endedAt),
          crop_type: session.cropType ?? '—',
          seed_variety: session.seedVariety ?? '—',
          total_seeds_counted: totalSeeds.toLocaleString(),
          average_spacing: 'N/A',
          average_speed: 'N/A',
          total_distance_travelled: 'N/A',
          status: session.endedAt ? 'Completed' : 'Live',
        },
        equipment: {
          tractor_name: tractor?.name ?? '—',
          planter_name: tractor?.implementName ?? '—',
          edge_device: '—',
        },
        operator: {
          name: operator?.name ?? '—',
          employee_code: operator?.employeeCode ?? '—',
        },
        field: {
          name: field?.name ?? '—',
          boundary: '—',
          area: field?.acreage ? `${field.acreage} acres` : '—',
        },
        rowMetrics: rowSummary.map(r => ({
          row: r.row_number,
          seeds: r.total_seeds,
          spacing: 'N/A',
          status: rowStatus(r),
        })),
      });
    }

    load().catch(err => setState(prev => ({ ...prev, error: err.message, loading: false })));
  }, [sessionId]);

  return state;
}
