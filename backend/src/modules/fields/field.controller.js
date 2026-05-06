import * as fieldsRepo from './fields.repository.js';

async function getFields(req, res, next) {
  try {
    const fields = await fieldsRepo.findAll();
    res.json(fields);
  } catch (err) {
    next(err);
  }
}

async function getFieldById(req, res, next) {
  try {
    const field = await fieldsRepo.findById(req.params.id);
    if (!field) return res.status(404).json({ message: 'Field not found' });
    res.json(field);
  } catch (err) {
    next(err);
  }
}

export { getFields, getFieldById };
