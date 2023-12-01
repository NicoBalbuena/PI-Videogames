import axios from "axios";


export function postGame(state){
    
    return async function(){
        
        try {console.log("este es el action",state)
            
            await axios.post("http://localhost:3001/postgame/",state)
            console.log("Videogame creado")
        } catch (error) {
            console.log(error.response.data.error)
        }
    }
}


export function getGenero(state){
    
    return async function(){
        
        try {console.log("este es el action",state)
            
            const response=await axios.get("http://localhost:3001/genres/")
            console.log(response)
        } catch (error) {
            console.log(error.response.data.error)
        }
    }
}