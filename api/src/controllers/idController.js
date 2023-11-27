const { getVideogamesDB, getVideogames } = require("./videogamesController")




const getById=async(id)=>{
    const gamesDB=await getVideogamesDB();
    const gamesApi=await getVideogames();
    const allGames=[...gamesDB,...gamesApi]

    if(id){
        const filterById=allGames.filter((g)=>g.id===id)
        return filterById;
    }
    return getById
}

module.exports={
    getById
}