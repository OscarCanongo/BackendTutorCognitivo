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
exports.create = async (req, res) => {
 
  const problema = new Problema(req.body);
  
  //guarda la taxonomia en la db   
   try{
      await problema.save();
  
      //Todo bien
      res.json({ msg: 'Problema creado correctamente' });
  
  
   }catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
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

