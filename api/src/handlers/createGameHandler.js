const {createGame}=require('../controllers/createGamesController')


const createGameHandler=async(req,res)=>{
    const{nombre,descripcion,plataformas,fechaDeLanzamiento,rating,imagen,genero}=req.body
    try {
        console.log(nombre,genero)
        const response=await createGame(nombre,descripcion,plataformas,fechaDeLanzamiento,rating,imagen,genero)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={
    createGameHandler
}