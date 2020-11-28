const mongoose = require('mongoose');

const PreguntaSchema = mongoose.Schema({
    taxonomia: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Taxonomia',
      require: true
    },
    pregunta: {
      type: String,
      require: true
    },
    respuesta: {
      type: String,
      require: true
    }
});

module.exports = mongoose.model('Pregunta', PreguntaSchema);

