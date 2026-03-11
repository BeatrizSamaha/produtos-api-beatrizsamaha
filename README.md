## API REST de Produtos com Node.js + Express

Nome: Beatriz Samaha de Faria Garcia
Matricula: 202501006337 - Ibmec

## Descrição do trabalho

O projeto é baseado na implementação de uma API CRUD completa para o recurso produtos, utilizando obrigatoriamente a stack Node.js + Express. Conforme ensinado na aula 7.

## Como executar

1. Clonar o repositório
2. Entrar na pasta do projeto
3. Instalar as dependências:
```
   npm install
```
4. Iniciar o servidor em modo desenvolvimento:
```
   npm start
```
5. O servidor irá rodar em: http://localhost:3000

## Endpoints

| Verbo  | Path                     | Descrição                        | Status esperado         |
|--------|--------------------------|----------------------------------|-------------------------|
| GET    | /api/v1/produtos         | Lista todos os produtos          | 200 OK                  |
| GET    | /api/v1/produtos/:id     | Retorna um produto pelo ID       | 200 OK / 404 Not Found  |
| POST   | /api/v1/produtos         | Cria um novo produto             | 201 Created / 400 Bad Request |
| PUT    | /api/v1/produtos/:id     | Atualiza completamente o produto | 200 OK / 404 Not Found  |
| DELETE | /api/v1/produtos/:id     | Remove um produto                | 204 No Content / 404 Not Found |
```

