async function register(req, res, next) {
  try {
    res.status(501).json({ message: 'Not implemented' });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    res.status(501).json({ message: 'Not implemented' });
  } catch (err) {
    next(err);
  }
}

async function logout(req, res, next) {
  try {
    res.status(501).json({ message: 'Not implemented' });
  } catch (err) {
    next(err);
  }
}

export { register, login, logout };
