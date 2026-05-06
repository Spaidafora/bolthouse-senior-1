import * as edgeDevicesRepo from './edgeDevices.repository.js';

async function getEdgeDeviceById(req, res, next) {
  try {
    const device = await edgeDevicesRepo.findById(req.params.id);
    if (!device) return res.status(404).json({ message: 'Edge device not found' });
    res.json(device);
  } catch (err) {
    next(err);
  }
}

async function getEdgeDevicesByTractorId(req, res, next) {
  try {
    const devices = await edgeDevicesRepo.findByTractorId(req.params.tractorId);
    res.json(devices);
  } catch (err) {
    next(err);
  }
}

export { getEdgeDeviceById, getEdgeDevicesByTractorId };
