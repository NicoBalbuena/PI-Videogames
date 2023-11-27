const {Videogames}=require('../db');
const Genres = require('../models/Genres');

const createGame=async(nombre,descripcion,plataformas,fechaDeLanzamiento,rating,imagen,genero
    )=> {
    const newGame=await Videogames.create({
        nombre,
        descripcion,
        plataformas,
        fechaDeLanzamiento,
        rating,
        imagen});

    // genero.forEach( async (gen)=> {
    //     let generosDB= await Genres.findAll({where:{pepito:gen} });
        
    // })
    
    //newGame
    return newGame
}



module.exports={
    createGame
}

