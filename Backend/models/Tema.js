const mongoose = require('mongoose');

const TemaSchema = mongoose.Schema({
    nombre: {
      type: String,
      require: true
    },
});

module.exports = mongoose.model('Tema', TemaSchema);

