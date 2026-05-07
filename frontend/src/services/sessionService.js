import { get } from './apiClient.js';

function getSessions(filters = {}) {
  const params = new URLSearchParams();
  if (filters.tractorId) params.set('tractorId', filters.tractorId);
  if (filters.fieldId) params.set('fieldId', filters.fieldId);
  if (filters.date) params.set('date', filters.date);
  if (filters.status) params.set('status', filters.status);
  const qs = params.toString();
  return get(`/api/sessions${qs ? '?' + qs : ''}`);
}

function getSessionById(id) {
  return get(`/api/sessions/${id}`);
}

function getActiveSession() {
  return get('/api/sessions/active');
}

function getRowSummary(id) {
  return get(`/api/sessions/${id}/row-summary`);
}

function getSeedTimeline(id, bucketMs = 60_000) {
  return get(`/api/sessions/${id}/seed-timeline?bucket=${bucketMs}`);
}

function getSessionGps(id) {
  return get(`/api/sessions/${id}/gps`);
}

export { getSessions, getSessionById, getActiveSession, getRowSummary, getSeedTimeline, getSessionGps };
