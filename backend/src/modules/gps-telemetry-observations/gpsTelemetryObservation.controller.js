import * as gpsRepo from './gpsTelemetryObservations.repository.js';

async function ingestGps(req, res, next) {
  try {
    const inserted = await gpsRepo.insertBatch(req.body);
    res.status(201).json({ inserted: inserted.length });
  } catch (err) {
    next(err);
  }
}

export { ingestGps };
