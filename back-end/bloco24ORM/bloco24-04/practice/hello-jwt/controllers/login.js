require('dotenv/config');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const isBodyValid = (username, password) => username && password;

module.exports = (req, res) => {
  try {
    const { username, password } = req.body;

    if (!isBodyValid(username, password)) {
      return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });
    }
  
    const user = JSON.parse(fs.readFileSync(__dirname + '/../db/users.json', { encoding: 'utf8' }))
      .find((user) => user.username === username);
  
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Usuário não existe ou senha inválida' }); 
    }

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    if (user.username === 'admin' && user.password === 's3nh4S3gur4???') {
      const token = jwt.sign({ data: { username: user.username, admin: true } }, secret, jwtConfig);

      return res.status(200).json({ token });
    }

    const token = jwt.sign({ data: { username: user.username, admin: false } }, secret, jwtConfig);

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
