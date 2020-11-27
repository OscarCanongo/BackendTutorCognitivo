const Taxonomia = require("../models/Taxonomia");

//Get
exports.getTaxonomia = async (req, res) => {
  try {
    const taxonomia = await Taxonomia.find();
    res.json({ taxonomia });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

// Post
exports.create = async (req, res) => {
 
const taxonomia = new Taxonomia(req.body);

//guarda la taxonomia en la db   
 try{
    await taxonomia.save();

    //Todo bien
    res.json({ msg: 'Taxonomia creada correctamente' });


 }catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};


exports.delete = async (req, res) => {
    const taxonomia = Taxonomia(req.body);
    try {

        //id
        let taxonomia = await Taxonomia.findById(req.params.id);

        //Revisamos si existe el id 
        if(!taxonomia){
            return res.status(404).send("Id no encontrada");
        }

        //Eliminar la taxonomia
        await Taxonomia.findOneAndRemove({ _id : req.params.id });

        //Todo bien
        res.json({ msg: 'Taxonomia eliminada correctamente' });
        
    }catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
  };
