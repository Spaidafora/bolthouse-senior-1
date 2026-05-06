import * as sensorsRepo from './sensors.repository.js';

async function getSensorById(req, res, next) {
  try {
    const sensor = await sensorsRepo.findById(req.params.id);
    if (!sensor) return res.status(404).json({ message: 'Sensor not found' });
    res.json(sensor);
  } catch (err) {
    next(err);
  }
}

async function getSensorsByTractorId(req, res, next) {
  try {
    const sensors = await sensorsRepo.findByTractorId(req.params.tractorId);
    res.json(sensors);
  } catch (err) {
    next(err);
  }
}

export { getSensorById, getSensorsByTractorId };
