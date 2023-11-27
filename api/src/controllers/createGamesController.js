const {Videogames}=require('../db');

const createGame=async(nombre,descripcion,plataformas,fechaDeLanzamiento,rating)=>{
    const newGame=await Videogames.findOrCreate({
        where:{nombre,
            descripcion,
            plataformas
            ,fechaDeLanzamiento
            ,rating
        }
    })
    return newGame
}



module.exports={
    createGame
}

