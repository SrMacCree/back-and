const express = require("express");
const bodyParser = require("body-parser"); //poder usar o json e para fazer a decodificação das urls

const app = express();

app.use(bodyParser.json()); // entender requisições em .json
app.use(bodyParser.urlencoded({ extended: false })); // fazer o decode de parâmetros enviados via url

require('./controllers/index')

app.listen(3000); //roda o servidor/ subir o servidor 
