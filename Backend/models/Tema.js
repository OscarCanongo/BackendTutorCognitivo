const mongoose = require('mongoose');

const TemaSchema = mongoose.Schema({
    nombre: {
      type: String,
      require: true
    },
    problemas: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Problema',
      require: true
    }],
});

module.exports = mongoose.model('Tema', TemaSchema);

