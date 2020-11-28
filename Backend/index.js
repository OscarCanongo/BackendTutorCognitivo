const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');


//Crear el servidor
const app = express();

//Conectar a la base de datos
conectarDB();

//habilitar cors
app.use(cors());

//Habilitar express.json
app.use(express.json({ extended: true}));


//Puerto del server
const port = process.env.PORT || 4000

//Importar rutas
app.use('/pregunta', require('./routes/pregunta'));
app.use('/dominio', require('./routes/dominio'));
app.use('/tema', require('./routes/tema'));
app.use('/signup', require('./routes/usuarios'));
app.use('/login', require('./routes/auth'));
app.use('/taxonomia', require('./routes/taxonomia'));
app.use('/problema', require('./routes/problema'));
app.use('/tutor', require('./routes/tutor'));


//Arrancar server
app.listen(port, '0.0.0.0', () => {
    console.log(`El server esta corriendo en el puerto ${port}`);
});