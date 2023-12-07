const {getAllGenresDB}=require("../controllers/genController");


const getGenresHandler=async(req,res)=>{
    const {nombre,descripcion,plataformas,fechaDeLanzamiento,rating,imagen,
        genero}=req.query
    try {
            const response=await getAllGenresDB(nombre,descripcion,plataformas,fechaDeLanzamiento,rating,imagen,
                genero);
            return res.status(200).json(response)
        
       
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports={
    getGenresHandler
}