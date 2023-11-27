const { nameController } = require("../controllers/nameController");




const getNameHandler=async(req,res)=>{
    const {nombre}=req.query
    console.log("Nombre es:",nombre)
    try {
        if(nombre){
        const response=await getAllVideogames(nombre);
        return res.status(200).json(response);
        }
        const response=await getAllVideogames();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
module.exports={
    getNameHandler
}