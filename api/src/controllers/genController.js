const {Genres}=require("../db")
const axios=require("axios");
const key=process.env.API_KEY

//para que cargue ni bien levantamos el server
const getAllGenresDB=async()=>{
    const genres=await Genres.findAll();
    // if(!genres.length){
        const response=await axios.get(`https://api.rawg.io/api/genres?key=${key}`)
        const data=response.data;
        const results=data.results
        let genresApi=[]
        results.map((g)=>genresApi.push(g.name))
        genresApi.forEach(async(g)=>{
            await Genres.findOrCreate({
                where:{
                    nombre:g,
                }
            })
        })
    //     return genresApi
    //}
    console.log("Generos cargados")
    return genres.map((g)=>g.nombre);
    
}

module.exports={
    getAllGenresDB
}