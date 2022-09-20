const jwt = require('jsonwebtoken');

const fs = require('fs');

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = JSON.parse(fs.readFileSync(__dirname + '/../db/users.json', { encoding: 'utf8' }))
      .find((user) => user.username === decoded.data.username);

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    }

    return res.status(200).json({ username: decoded.data.username, admin: decoded.data.admin });
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};