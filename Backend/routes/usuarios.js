//Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { check } = require ('express-validator');

//Crea un usuario

// api/usuarios
router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un mail valido').isEmail(),
        check('password', 'El password debe de ser minimo de 6 caracteres').isLength({ min: 6})
    ],
    usuarioController.nuevoUsuario
);

module.exports = router;