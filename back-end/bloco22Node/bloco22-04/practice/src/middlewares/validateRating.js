const validateRating = (req, res, next) => {
  const { description: { rating } } = req.body;
  if (Number(rating) >= 1 && Number(rating) <= 5 && Number(rating) % 1 === 0) {
    next();
  }
  res.status(400).json({ message: "O campo rating deve ser um número inteiro entre 1 e 5" });
};

module.exports = validateRating;
