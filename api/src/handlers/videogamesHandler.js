const{ getAllVideogames, getVideogamesDB}=require('../controllers/videogamesController')

const getVideogamesHandler=async(req,res)=>{
    const {nombre}=req.query
   try {
    if(nombre){
        const response=await getVideogamesDB(nombre);
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