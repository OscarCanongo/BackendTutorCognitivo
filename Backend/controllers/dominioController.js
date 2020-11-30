const Dominio = require("../models/Dominio");

//Get
exports.getDominio = async(req, res) => {
    try {
        const dominio = await Dominio.find();
        res.json({ dominio });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

// Post
exports.create = async(req, res) => {

    const dominio = new Dominio(req.body);

    //guarda el dominio en la db   
    try {
        await dominio.save();

        //Todo bien
        res.json({ msg: 'Dominio creado correctamente' });


    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

//delete
exports.delete = async(req, res) => {
    const dominio = Dominio(req.body);
    try {

        //id
        let dominio = await Dominio.findById(req.params.id);

        //Revisamos si existe el id 
        if (!dominio) {
            return res.status(404).send("Id no encontrada");
        }

        //Eliminar el proyecto
        await Dominio.findOneAndRemove({ _id: req.params.id });

        //Todo bien
        res.json({ msg: 'Dominio eliminado correctamente' });

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

//   update


exports.update = async(req, res) => {
    const { materia, ejercicio, nivelEjercicio, material } = Dominio(req.body);

    const nuevoDominio = {}

    try {
        let dominio = await Dominio.findById(req.params.id);
        if (!dominio) {
            return res.status(404).send("Id no encontrada");
        }

        if (materia) {
            nuevoDominio.materia = materia;
        }

        if (ejercicio) {
            nuevoDominio.ejercicio = ejercicio;
        }

        if (nivelEjercicio) {
            nuevoDominio.nivelEjercicio = nivelEjercicio;
        }

        if (material) {
            nuevoDominio.material = material;
        }

        //Update
        dominio = await Dominio.findByIdAndUpdate({ _id: req.params.id }, { $set: nuevoDominio }, { new: true });
        res.json({ msg: 'Dominio actualizado correctamente' });
        res.json({ dominio });
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};