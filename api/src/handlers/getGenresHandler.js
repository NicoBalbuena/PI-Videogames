const {getAllGenresDB}=require("../controllers/genController");
const { getAllVideogames } = require("../controllers/videogamesController");

const getGenresHandler=async(req,res)=>{
    const {nombre}=req.query
    try {
        if(nombre){
            const response=await getAllGenresDB(nombre);
            return res.status(200).json(response)
        }
        const response=await getAllVideogames();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports={
    getGenresHandler
}