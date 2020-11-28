const mongoose = require('mongoose');

const ProblemaSchema = mongoose.Schema({
    preguntas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pregunta',
        require: true
      },],
    descripcion: {
      type: String,
      require: true
    }
});

module.exports = mongoose.model('Problema', ProblemaSchema);

