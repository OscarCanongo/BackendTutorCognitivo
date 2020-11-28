const Tema = require("../models/Tema");

//Get
exports.getTema = async (req, res) => {
  try {
    const tema = await Tema.find();
    res.json({ tema });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Post
exports.create = async (req, res) => {
 
const tema = new Tema(req.body);

//guarda el materia en la db   
 try{
    await tema.save();

    //Todo bien
    res.json({ msg: 'Tema creado correctamente' });


 }catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};


exports.delete = async (req, res) => {
    const tema = Tema(req.body);
    try {

        //id
        let tema = await Tema.findById(req.params.id);

        //Revisamos si existe el id 
        if(!tema){
            return res.status(404).send("Id no encontrada");
        }

        //Eliminar el tema
        await Tema.findOneAndRemove({ _id : req.params.id });

        //Todo bien
        res.json({ msg: 'Tema eliminado correctamente' });
        
    }catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
  };
