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

    var SQL = "CREATE TABLE agenda (nome VARCHAR (255), endereco VARCHAR(255))"; // o nomde da tabela é agenda

    con.query (SQL, function (err, result) {
            if (err) throw err;
            console.log("Tabela criada com sucesso!");
        }
    );
});