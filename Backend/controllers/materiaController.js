const Materia = require("../models/Materia");

//Get
exports.getMateria = async (req, res) => {
  try {
    const materia = await Materia.find();
    res.json({ materia });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Post
exports.create = async (req, res) => {
 
const materia = new Materia(req.body);

//guarda el materia en la db   
 try{
    await materia.save();

    //Todo bien
    res.json({ msg: 'Materia creado correctamente' });


 }catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};


exports.delete = async (req, res) => {
    const materia = Materia(req.body);
    try {

        //id
        let materia = await Materia.findById(req.params.id);

        //Revisamos si existe el id 
        if(!materia){
            return res.status(404).send("Id no encontrada");
        }

        //Eliminar el proyecto
        await Materia.findOneAndRemove({ _id : req.params.id });

        //Todo bien
        res.json({ msg: 'Materia eliminado correctamente' });
        
    }catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
  };

//   update


exports.update = async (req, res) => {
    const { materia, ejercicio, nivelEjercicio, material } = Materia(req.body);
    
    const nuevoMateria = {}
    
    try{
        let materia = await Materia.findById(req.params.id);
        if(!materia){
            return res.status(404).send("Id no encontrada");
        }

        if(nombre){
            nuevoMateria.nombre = nombre;
        }

        //Update
        materia = await Materia.findByIdAndUpdate({ _id: req.params.id }, { $set: nuevoMateria }, { new: true });
        res.json({msg: 'Materia actualizado correctamente'});
        res.json({materia});
    }catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
  };