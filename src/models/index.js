const fs = require('fs');

function carregaModels(){
    const nomeDosArquivos = fs.readdirSync(__dirname)
    for (const nome of nomeDosArquivos) {
        if (nome != 'index.js') {
            console.log(`Carregando ${nome}`);
            require(`./${nome}`)
        }
    }
}

module.exports = carregaModels 