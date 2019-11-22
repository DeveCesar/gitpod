const { Schema, model } = require('mongoose');

const TareasSchema = new Schema({
    tarea: {
        type: String,
        required: true
    },
    descripcion:{
        type: String
    }
})

module.exports = model('Tareas', TareasSchema);