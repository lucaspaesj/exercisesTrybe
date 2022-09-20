const fs = require('fs');

module.exports = (req, res) => {
  try {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync(__dirname + '/../db/users.json', { encoding: 'utf8' }));
    
    console.log(users);

    if (users.some((user) => user.username === username && user.password === password)) {
      return res.status(409).json({ message: 'Usuário já encontra-se cadastrado no sistema' });
    }
    
    fs.writeFileSync(
      __dirname + '/../db/users.json',
      JSON.stringify([...users, { id: Number(users[users.length - 1].id) + 1, username, password }]));

    return res.status(201).json({ message: 'Novo usuário criado com sucesso', user: username });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
};
