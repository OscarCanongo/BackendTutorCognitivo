const Tutor = require("../models/Tutor");

//Get
exports.getTutor = async (req, res) => {
  try {
    const tutor = await Tutor.find();
    res.json({ tutor });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Post
exports.create = (req, res) => {
 
  const tutor = new Tutor({
    materia: req.body.materia,
    pregunta: req.body.pregunta,
    respuesta: req.body.respuesta,
  });

//guarda el tutor en la db   
  tutor.save(tutor).then(data => {
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
// exports.delete = (req, res) => {
//     const id = req.params.id;
  
//     Tutor.findByIdAndRemove(id)
//       .then(data => {
//         if (!data) {
//           res.status(404).send({
//             message: `No se puede borrar`
//           });
//         } else {
//           res.send({
//             message: "Borrado exitosos"
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "No se puede borar el tutor=" + id
//         });
//       });
//   };
