const {Videogames,Genres}=require('../db');
const key=process.env.API_KEY
const axios=require("axios");



const getVideogames=async()=>{
    const response=await axios.get(`https://api.rawg.io/api/games?key=${key}&limit=30`)
    const data=response.data.results
    const results= data.map((games)=>{
        const platforms = games.platforms.map((p) => p.platform.name);
        return{
            id:games.id,
            nombre:games.name,
            descripcion:games.description,
            plataformas:platforms,
            fechaDeLanzamiento:games.released,
            rating:games.rating,
            imagen:games.background_image,
        }
    })
    
    
    return results;
}
// const getVideogamesDB=async(nombre)=>{
//     const gamesDB=await Videogames.findAll({
//         include:[
//             {
//                 model:Genres,
//                 attributes:["genres"]
//             }
//         ]
//     });

//     if(!gamesDB.length)throw new Error("No hay video juegos registrados");
//     return gamesDB
// }
const getVideogamesDB=async()=>{
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

const getAllVideogames=async(nombre,id)=>{
    const allApi=await getVideogames();
    const allDB=await getVideogamesDB();
    const allVideogames=[...allDB,...allApi]

    if(nombre){
        const filterGames=allVideogames.filter((g)=>g.nombre.toLowerCase().includes(nombre.toLowerCase()))
        return filterGames;
    }
    // if(id){
    //     const filterGamesId=allVideogames.filter((g)=>g.id==id )
    //     return filterGamesId;
    // }
    return allVideogames
    
}

module.exports={
    getVideogames,
    getVideogamesDB,
    getAllVideogames
}