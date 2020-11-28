const Pregunta = require("../models/Pregunta");

//Get
exports.getPregunta = async (req, res) => {
  try {
    const pregunta = await Pregunta.find();
    res.json({ pregunta });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Post
exports.create = (req, res) => {
 
  const pregunta = new Pregunta({
    taxonomia: req.body.taxonomia,
    pregunta: req.body.pregunta,
    respuesta: req.body.respuesta,
  });

//guarda la pregunta en la db   
  pregunta.save(pregunta).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al tratar de guardar el tutor."
      });
    });

  

};


// delete
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Pregunta.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `No se puede borrar`
          });
        } else {
          res.send({
            message: "Borrado exitosos"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se puede borar el la pregunta=" + id
        });
      });
  };

