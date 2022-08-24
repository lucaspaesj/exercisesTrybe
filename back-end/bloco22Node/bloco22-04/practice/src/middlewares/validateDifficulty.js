const validateDifficulty = (req, res, next) => {
  const { description: { difficulty } } = req.body;
  const validDifficulties = ["Fácil", "Médio", "Difícil"];
  if (!validDifficulties.some(dif => dif === difficulty)) {
    return res.status(400).json({ message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'"});
  }
  next();
};

module.exports = validateDifficulty;
