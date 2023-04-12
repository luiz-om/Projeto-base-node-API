require('dotenv').config();
const express = require('express');
require('./db/mongoDb')
const carregaModels = require('./models/index')
carregaModels()
const app = express();



app.listen(3000, ()=> {
   console.log("Api cantou"); 

})