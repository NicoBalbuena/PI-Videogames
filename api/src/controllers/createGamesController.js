
const createGame=async(nombre,descripcion,plataformas,fechaDeLanzamiento,rating,imagen,
    genres
    )=> {
    const newGame=await Videogames.create({
        nombre,
        descripcion,
        plataformas,
        fechaDeLanzamiento,
        rating,
        imagen,

    });
    
    let getAllGenresDB = await Genres.findAll({where:{nombre:genero}})
    let getAllGenresDB = await Genres.findAll({where:{nombre:genres}})
    newGame.addGenres(getAllGenresDB)
    console.log(newGame)
    return newGame
}
module.exports={
    createGame
}

