const mongoose = require('mongoose');

const ProblemaSchema = mongoose.Schema({
    tema: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tema',
      require: true
    },
    descripcion: {
      type: String,
      require: true
    },
    preguntas: [{
        type: String,
        require: true
      }],
    respuestas: [{
        type: String,
        require: true
    }]
});

module.exports = mongoose.model('Problema', ProblemaSchema);

