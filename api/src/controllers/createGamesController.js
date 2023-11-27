const {Videogames,Genres}=require('../db');


const createGame=async(nombre,descripcion,plataformas,fechaDeLanzamiento,rating,imagen,
    genero
    )=> {
    const newGame=await Videogames.create({
        nombre,
        descripcion,
        plataformas,
        fechaDeLanzamiento,
        rating,
        imagen,
    });
    

    let getAllGenresDB = await Genres.findAll({where : {nombre:genero}})
    
    newGame.addGenres(getAllGenresDB)
    
    return newGame
}

module.exports={
    createGame
}

