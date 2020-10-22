const mongoose = require('mongoose');
require('dotenv').config({ path: 'string.env' });

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB Conectada');
    } catch (error) {
        console.log('hubo un error')
        console.log(error);
        process.exit(1); // Detener la app
    }
}

module.exports = conectarDB;