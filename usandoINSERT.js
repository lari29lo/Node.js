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

    // ex 01
    var SQL1 = "INSERT INTO agenda (nome, endereco) VALUES ";  //inserindo valores na tabela
    SQL1 = SQL1 + "('Raphael', 'Ceilandia'),";
    SQL1 = SQL1 + "('Larissa', 'Recanto')";  

    
    // ex 02
    var strNome = "Vanessa";
    var strEndereco = "Suiça";
    var SQL2 = "INSERT INTO agenda (nome, endereco) VALUES "; 
    SQL2 = SQL2 + " ('Vanessa' , 'Suiça') ";


    // ex 03



    con.query (SQL2, function (err, result) {   // pedindo para executar 
            if (err) throw err;
            console.log("Dado inserido com sucesso!");
        }
    );
});




