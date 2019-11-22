const express = require('express');
const app = express();
const tarea = require('./modelo/tareas');

//Configuraciones
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas a consumir
app.get('/', async (req, res) => {
    const tarea = await tarea.find();
    res.render('index', { tarea });
})

app.post('/crear', async (req, res) => {
    const nuevaTarea = new tarea({
        tarea: req.body.tarea,
        descripcion: req.body.descripcion
    });
    await nuevaTarea.save();
    res.redirect('/');
})

//Archivos estaticos
app.use(express.static(__dirname + '/public'));

module.exports = app;