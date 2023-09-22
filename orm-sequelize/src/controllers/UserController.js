const { update } = require("../models/User");
const User = require("../models/User");

module.exports = {
    // Funcao responsavel por buscas todos os usuarios que foram cadastrados na aplicacao
    async index(request, response){
        // Metodo findAll() é utilizado para buscar por todos os dados dos usuarios cadastrados no banco de dados

        // Utilizamos a propriedade raw com o valor true oirqye a funcao findAll vai trazer informacoes desnecessarias por isso para retornar somente um array, passamos essa propriedade
        const users = await User.findAll({ raw: true });

        return response.json(user);
    },

    // Funcao responsavel por cadastrar os usuarios na aplicacao
    async store(request, response) {
        const {name, email} = request.body
        const user = await User.create({ name, email})

        return responde.json(user)
    },

    async update(request, response) {
        const { id } = request.params
        const {name, email} = request.body

        const user = await User.update(
            { name, email}, { where:{ id:id} }
        );
        return responde.json(user);
    },

    async delete(request, response) {
        // Enviando ID nos parametros da requisição
        const { id } = request.params;

        // funcao destroy é usada para deletar um registro no banco de dados
        const user = await User.destroy({ where: {id:id}});
    
        // Retorna uma resposta no formato json
        return responde.json(user);
        }
    }