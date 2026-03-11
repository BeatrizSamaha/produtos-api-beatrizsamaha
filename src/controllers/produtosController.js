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
// POST /produtos - criar
const criar = (req, res) => {
  const { nome, descricao, preco, categoria, estoque } = req.body;

  if (!nome || !descricao || !preco || !categoria || !estoque)
    return res.status(400).json({ erro: 'nome, descricao, preco, categoria e estoque são obrigatórios' });

  const novo = { id: nextId++, nome, descricao, preco, categoria, estoque, ativo: true,
    criado_em: new Date().toISOString(), atualizado_em: new Date().toISOString() };

  produtos.push(novo);
  res.status(201).json(novo);
};


// PUT /produtos/:id - atualizar completamente
const atualizar = (req, res) => {
  const idx = produtos.findIndex(p => p.id === Number(req.params.id));

  if (idx === -1) return res.status(404).json({ erro: 'Produto não encontrado' });

  const { nome, descricao, preco, categoria, estoque, ativo } = req.body;

  produtos[idx] = {
    ...produtos[idx],
    nome, descricao, preco, categoria, estoque, ativo,
    atualizado_em: new Date().toISOString()
  };

  res.json(produtos[idx]);
};

// DELETE /produtos/:id - remover
const remover = (req, res) => {
  // TODO
};

module.exports = { listar, buscarPorId, criar, atualizar, remover };