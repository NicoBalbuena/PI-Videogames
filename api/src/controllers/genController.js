const {Genres}=require("../db")
const axios=require("axios");
const key=process.env.API_KEY


const getAllGenresDB=async()=>{
    const genres=await Genres.findAll();
    if(!genres.length){
        const response=await axios.get(`https://api.rawg.io/api/genres?key=${key}`)
        const data=response.data;
        const results=data.results
        let genresApi=[]
        results.map((g)=>genresApi.push(g.name))
        genresApi.forEach(async(g)=>{
            await Genres.findOrCreate({
                where:{
                    pepito:g,
                }
            })
        })
        return genresApi
    }
    return genres.map((g)=>g.pepito);
}

module.exports={
    getAllGenresDB
}