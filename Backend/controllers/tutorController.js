const Tutor = require ('../models/Tutor');

//Get 
exports.getTutor = async (req, res) => {
    try {

        const tutor = await Tutor.find();
        res.json({ tutor });

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');
    }
}