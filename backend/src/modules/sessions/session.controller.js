import * as sessionsRepo from './sessions.repository.js';
import * as seedRepo from '../seed-interval-observations/seedIntervalObservations.repository.js';

async function getSessions(req, res, next) {
  try {
    const { tractorId, fieldId, date, status } = req.query;
    const sessions = await sessionsRepo.findAllWithDetails({ tractorId, fieldId, date, status });
    res.json(sessions);
  } catch (err) {
    next(err);
  }
}

async function getActiveSession(req, res, next) {
  try {
    const session = await sessionsRepo.findActive();
    if (!session) return res.status(404).json({ message: 'No active session' });
    res.json(session);
  } catch (err) {
    next(err);
  }
}

async function getSessionById(req, res, next) {
  try {
    const session = await sessionsRepo.findById(req.params.id);
    if (!session) return res.status(404).json({ message: 'Session not found' });
    res.json(session);
  } catch (err) {
    next(err);
  }
}

async function getSeedTimeline(req, res, next) {
  try {
    const bucketMs = req.query.bucket ? Number(req.query.bucket) : 60_000;
    const rows = await seedRepo.findTimeline(req.params.id, bucketMs);
    res.json(rows);
  } catch (err) {
    next(err);
  }
}

async function getHeatmap(req, res, next) {
  try {
    const rows = await seedRepo.findHeatmap(req.params.id);
    res.json(rows);
  } catch (err) {
    next(err);
  }
}

async function getRowSummary(req, res, next) {
  try {
    const rows = await seedRepo.findRowSummary(req.params.id);
    res.json(rows);
  } catch (err) {
    next(err);
  }
}

export { getSessions, getActiveSession, getSessionById, getSeedTimeline, getHeatmap, getRowSummary };
