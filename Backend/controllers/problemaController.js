const Problema = require("../models/Problema");

//Get
exports.getProblema = async (req, res) => {
  try {
    const problema = await Problema.find();
    res.json({ problema });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Post
exports.create = (req, res) => {
  const problema = new Problema({
    descripcion: req.body.descripcion,
    preguntas: req.body.preguntas
  });

//guarda el problema en la db   
  problema.save(problema)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error al tratar de guardar el problema."
      });
    });

};


// delete
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Problema.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `No se puede borrar`
          });
        } else {
          res.send({
            message: "Borrado exitoso"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se puede borar el problema=" + id
        });
      });
  };

