const Problema = require("../models/Problema");

//Obtiene todos las preguntas del tema
exports.get = async (req, res) => {
    try {
       
        const problema = await Problema.find({ tema : req.params.id });
        res.json({ problema });
        
    } catch (error) {
        
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

