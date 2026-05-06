import * as seedRepo from './seedIntervalObservations.repository.js';

async function ingestSeed(req, res, next) {
  try {
    const inserted = await seedRepo.insertBatch(req.body);
    res.status(201).json({ inserted: inserted.length });
  } catch (err) {
    next(err);
  }
}

export { ingestSeed };
