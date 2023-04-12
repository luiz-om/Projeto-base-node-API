
const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL,
 {dbName:'linkThree_db'})
 .then(()=>{
    console.log('Banco conectado com sucesso');
 }).catch(error=>{
    console.log('Erro ao conectar no banco' + error);
 })

