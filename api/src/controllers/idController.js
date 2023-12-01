
const key=process.env.API_KEY
const {Videogames,Genres}=require('../db');
const axios=require("axios");


const getVideogamesId=async()=>{
    const response=await axios.get(`https://api.rawg.io/api/games?key=${key}`)
    const data=response.data.results
    const results= data.map((games)=>{
        const platforms = games.platforms.map((p) => p.platform.name);
        const genresUniq=games.genres.map((g)=>g.name)
        return{
            id:games.id,
            nombre:games.name,
            descripcion:games.description,
            plataformas:platforms,
            fechaDeLanzamiento:games.released,
            rating:games.rating,
            imagen:games.background_image,
            genero:genresUniq
        }
    })
    return results;
}
const getVideogamesDBid=async()=>{
    const gamesDB=await Videogames.findAll({
        include:
            {
                model:Genres,
                attributes:["nombre"],
                through: {
                    attributes: [],
                },
            }
    });
    //if(!gamesDB.length)throw new Error("No hay video juegos registrados");
    return gamesDB
}
const allVideogamesId=async(id)=>{
        console.log("aca recibe el id",id)
        const gamesDB=await getVideogamesDBid();
        const gamesApi=await getVideogamesId();
        const allGames=[...gamesDB,...gamesApi]

        if(id){
            const filterById=allGames.filter((g)=>g.id===parseInt(id))
            return filterById;
        }

    return allVideogamesId
}

module.exports={
    allVideogamesId,
}