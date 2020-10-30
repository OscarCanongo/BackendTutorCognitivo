const mongoose = require('mongoose');

const MateriaSchema = mongoose.Schema({
    nombre: {
      type: String,
      require: true
    },
});

module.exports = mongoose.model('Materia', MateriaSchema);

