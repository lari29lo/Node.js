var mysql = require ('mysql2');

var con = mysql.createConnection({  //criando conexao
    host: "localhost",
    user: "root",
    password: "c@tolic@",
    database: "exemplo"     // o nome do banco de dados é exemplo
});

con.connect (function(err) {    //recebe como parâmetro essa função
    if (err) throw err;
    console.log ("Conexão realizada com sucesso!");
});

var SQL = "CREATE DATABASE aula0106";

con.query (SQL, function (err, result){
    if(err) throw err;
    console.log ("Banco de dados (esquema) foi criado com sucesso!");
});



