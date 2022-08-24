const validateToken = (req, res, next) => {
  const header = req.header('Authorization');
  if (!header || header.length !== 16) return res.status(401).json({ message: "Token inválido!" });
  next();
};

module.exports = validateToken;