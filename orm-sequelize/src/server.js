const express = require('express');

const routes = require("./routes")

require("./database/index");

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3333, ()=> console.log("Servidor sendo executado na porta 3333"));