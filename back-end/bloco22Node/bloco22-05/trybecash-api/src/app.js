const express = require('express');
const personRoutes = require('./routes/personRoutes');

const app = express();

app.use(express.json());

app.use('/person', personRoutes);

app.use((err, req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;