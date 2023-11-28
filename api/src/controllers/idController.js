const { default: axios } = require("axios")
const key=process.env.API_KEY
const { getVideogamesDB, getVideogames } = require("./videogamesController")


const getVideogamesId=async(id)=>{
    const response=await axios.get(`https://api.rawg.io/api/games?key=${key}&${id}`)
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

const getById=async(id)=>{
        const gamesDB=await getVideogamesDB();
        const gamesApi=await getVideogamesId();
        const allGames=[...gamesDB,...gamesApi]

    if(id){
        const filterById=allGames.filter((g)=>g.id===parseInt(id))
        return filterById;
    }
    return getById
}

module.exports={
    getById
}