//lógica de cada operação CRUD

let produtos = [];
let nextId = 1;

// GET /produtos - listar todos
const listar = (req, res) => {
  res.status(200).json(produtos);
};


// GET /produtos/:id - buscar por ID
const buscarPorId = (req, res) => {
  const produto = produtos.find(p => p.id === Number(req.params.id));
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
  return res.status(200).json(produto);  
};

// POST /produtos - criar
const criar = (req, res) => {
  // TODO
};

// PUT /produtos/:id - atualizar
const atualizar = (req, res) => {
  // TODO
};

// DELETE /produtos/:id - remover
const remover = (req, res) => {
  // TODO
};

module.exports = { listar, buscarPorId, criar, atualizar, remover };