const validateCreatedAt = (req, res, next) => {
  const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  const { description: { createdAt } } = req.body;
  if (!regex.test(createdAt)) {
    return res.status(400).json({ message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'"});
  }
  next();
};

module.exports = validateCreatedAt;
