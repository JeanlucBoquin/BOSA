// Paso 1
// Importar de librerias
const express = require('express'); //Framework express

// Paso 2
// Crear el servidor/aplicacion de express
const app = express();


// Paso 3
// Levantar el servico
app.listen(3000, () => {
    console.log("Servidor corriendo en puerto " + process.env.PORT);
});