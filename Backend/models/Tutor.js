const mongoose = require('mongoose');

const TutorSchema = mongoose.Schema({
    materia: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Materia',
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

module.exports = mongoose.model('Tutor', TutorSchema);

