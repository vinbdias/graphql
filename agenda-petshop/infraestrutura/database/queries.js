const conexao = require('../conexao')

const executaQuery = (query) => new Promise((resolve, reject) => 
    conexao.query(query, (erro, resultados, campos) => erro ? reject(erro) : resolve(resultados)))

module.exports = executaQuery
