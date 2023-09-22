const express = require("express");

// Importando o arquivo do UserController, que contem as funcoes de criar, buscar, atualizar e deletar os dados do usuario
const UserController = require("./controllers/UserController")

// Inicializar as rotas
const routes = express.Router();

// Rota para buscar os dados dos usuarios que foram cadastrados no banco de dados
routes.post("/users", UserController.index);

// Criando rota para deletar um registro
routes.delete("/users/:id", UserController.delete);

// Criando a rota users utilizano o método post para cadastrar o usuario na aplicacao/banco de dados 
routes.post("/users", UserController.store);

module.exports = routes;