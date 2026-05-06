import * as usersRepo from './users.repository.js';

async function getUserById(req, res, next) {
  try {
    const user = await usersRepo.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
}

async function getUserByEmail(req, res, next) {
  try {
    const user = await usersRepo.findByEmail(req.query.email);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err);
  }
}

export { getUserById, getUserByEmail };
