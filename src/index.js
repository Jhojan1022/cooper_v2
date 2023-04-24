const express = require("express");
let usuariosController = require("./controllers/usuarios")
let app = express();

const port = 9000;

// Motores de vistas
app.set("view engine", "ejs")
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views/public'));


// Rutas
app.get("/", usuariosController.usuarios)
app.get("/mi_actividad", (req, res) => {res.render("layouts/mi_actividad")})

app.listen(port || process.env.port, () => {
    console.log("Servidor en puerto " + port)
})