var express = require('express');
var router  = express.Router();
var app = express();

var porta = 3001;

router.get('/', function(req, res){
    console.log("Recebeu chamada");
    res.send("<h2>Welcome to Node App with Docker</h2>");
});

app.use(router);

app.listen(porta);

console.log('Servidor está em pé e escutando na porta: ' + porta);