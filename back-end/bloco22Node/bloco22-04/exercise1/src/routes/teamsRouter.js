const express = require('express');
const { validateTeam } = require('../middlewares/validateTeam');
const { apiCredentials } = require('../middlewares/apiCredentials');

const router = express.Router();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

router.get('/', (req, res) => res.json(teams));

router.use(apiCredentials);

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if (teams.find(t => t.id === id)) {
    next();
  } else {
    res.sendStatus(400);
  }
}

router.get('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.status(200).json(team);
});

// Arranja os middlewares para chamar validateTeam primeiro
router.post('/', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    || teams.some((t) => t.sigla === req.body.sigla)
  ) {
    return res.sendStatus(401);
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

router.put('/:id', validateTeam, existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

router.delete('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(200);
});

module.exports = router;
