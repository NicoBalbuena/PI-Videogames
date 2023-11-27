const { getVideogames, getVideogamesDB } = require("./videogamesController");



const nameController=async(nombre)=>{
    const todosApi=await getVideogames();
    const todosDB=await getVideogamesDB();
    const allNames=[...todosDB,...todosApi];
    


    if(nombre){
        const filterGames=allNames.filter((g)=>g.nombre===nombre)
        console.log(filterGames)
        return filterGames;
    }

    return allNames;
};

module.exports={
    nameController
}