const mongoose = require('mongoose');

const TaxonomiaSchema = mongoose.Schema({
    nombre: {
      type: String,
      require: true
    },
});

module.exports = mongoose.model('Taxonomia', TaxonomiaSchema);

