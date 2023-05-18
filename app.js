var http = require ("http");
var url = require ("url");

http.createServer ( function (req, res){
    res.setHeader ("charset", "UTF-8");
    res.writeHead (200, {"Content-Type": "test/html"});
    res.write("<html>");
    res.write("<head>");
    res.write ("<title> Exercicio final </title>");
    res.write("</head>");
    res.write("<body>");

    var Parametros = url.parse(req.url,true).query   //ele vai pegar e quebrar em variaveis
    for (var i in Parametros) {
        res.write ("<p>" + i +": " + Parametros[i]  + "</p>");
    }

    res.write("</body>");
    res.end("</html>"); });

listen (8080);


