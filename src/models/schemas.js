const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, "../database/usuarios.json"), '{"usuarios":[]}', function (err) {
    if (err) throw err;
    console.log('Archivo usuarios creado!');
});