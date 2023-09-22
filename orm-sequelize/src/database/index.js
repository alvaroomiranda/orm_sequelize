const Sequelize = require("sequelize"); // Importando o arquivo Sequelize

const dbConfig = require("../config/database"); // Importando o arquivo de configuração do banco de dados

const User = require("../models/User") // Importando o modelo da tabela de Users

const connection = new Sequelize(dbConfig); // Criando conexão com o banco de dados

User.init(connection);

module.exports = connection; // Exportando a conexão com o banco de dados