import * as tractorsRepo from './tractors.repository.js';

async function getTractors(req, res, next) {
  try {
    const tractors = await tractorsRepo.findAll();
    res.json(tractors);
  } catch (err) {
    next(err);
  }
}

async function getTractorById(req, res, next) {
  try {
    const tractor = await tractorsRepo.findById(req.params.id);
    if (!tractor) return res.status(404).json({ message: 'Tractor not found' });
    res.json(tractor);
  } catch (err) {
    next(err);
  }
}

export { getTractors, getTractorById };
