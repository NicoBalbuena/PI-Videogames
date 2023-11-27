const {createGame}=require('../controllers/createGamesController')


const createGameHandler=async(req,res)=>{
    const{nombre,descripcion,plataformas,fechaDeLanzamiento,rating}=req.body
    try {
        const response=await createGame(nombre,descripcion,plataformas,fechaDeLanzamiento,rating)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={
    createGameHandler
}