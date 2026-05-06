import * as operatorsRepo from './operators.repository.js';

async function getOperators(req, res, next) {
  try {
    const operators = await operatorsRepo.findAll();
    res.json(operators);
  } catch (err) {
    next(err);
  }
}

async function getOperatorById(req, res, next) {
  try {
    const operator = await operatorsRepo.findById(req.params.id);
    if (!operator) return res.status(404).json({ message: 'Operator not found' });
    res.json(operator);
  } catch (err) {
    next(err);
  }
}

export { getOperators, getOperatorById };
