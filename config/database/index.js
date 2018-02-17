var knex = require('knex')({
    client: 'pg',
    connection : 
    {
        host : 'localhost',
        user : 'postgres',
        password : 'root',
        database : 'tienda',
        charset : 'utf8'
    },
    searchPath : ['knex', 'public']
});

module.exports = knex;