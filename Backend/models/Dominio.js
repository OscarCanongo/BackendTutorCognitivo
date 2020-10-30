const mongoose = require('mongoose');

const DominioSchema = mongoose.Schema({
    materia: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Materia',
      require: true
    },
    ejercicio: {
      type: String,
      require: true
    },
    nivelEjercicio: {
      type: Number,
      require: true
    },
    material:{
        type: Buffer,
        require: true
    }
});

module.exports = mongoose.model('Dominio', DominioSchema);

