
const key=process.env.API_KEY
const {Videogames,Genres}=require('../db');
const axios=require("axios");

//no es necesario un mapeo porque solamente tengo un solo objeto
const getVideogamesId=async(id)=>{
    const response=await axios.get(`https://api.rawg.io/api/games/${id}?key=${key}`)
    const games=response.data
        const platforms = games.platforms.map((p) => p.platform.name);
        const genresUniq=games.genres.map((g)=>g.name)
        return{
            id:games.id,
            nombre:games.name,
            plataformas:platforms,
            fechaDeLanzamiento:games.released,
            rating:games.rating,
            imagen:games.background_image,
            genero:genresUniq,
            descripcion:games.description
        }
}
const getVideogamesDBid=async(id)=>{
    const gamesDB=await Videogames.findAll({
        where:{
            id:id
        },
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
    console.log(gamesDB)
    return gamesDB
}
const allVideogamesId=async(id)=>{
        const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/;
        if (regex.test(id)) {
            return await getVideogamesDBid(id);
          } else {
            return await getVideogamesId(id);
          }
}

module.exports={
    allVideogamesId,
    getVideogamesId
}