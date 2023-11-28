const { getById } = require('../controllers/idController');

const{ getAllVideogames, getVideogamesDB, getVideogames}=require('../controllers/videogamesController')

const getVideogamesHandler=async(req,res)=>{
    const {nombre,id}=req.query
   try {
    if(nombre){
        const response=await getAllVideogames(nombre);
        return res.status(200).json(response);
    }
    
    if(id){
        const response=await getById(id);
        return res.status(200).json(response);
    }
    const response=await getAllVideogames();
    res.status(200).json(response);
   } catch (error) {
    res.status(400).json({error:error.message})
   }
}
module.exports={
    getVideogamesHandler
}