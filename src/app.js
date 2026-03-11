// middleware de log, middleware de erro global e app.listen(3000). NÃO registrar rotas ainda.
// require do express 
const express = require('express'); // Importa o módulo
const produtosRouter = require('./routes/produtos');

const app = express(); // Cria a aplicação (app)

// expreess.json
app.use(express.json());

//middleware de log,
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] Nova requisição recebida: ${req.method} ${req.path}`);
  next();
});

//REgistrar rotas 
app.use('/api/v1/produtos', produtosRouter);

//middleware de erro global
app.use((err, req, res, next) => {
  res.status(500).json({ erro: err.message });
});

//app.listen(3000)
app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));