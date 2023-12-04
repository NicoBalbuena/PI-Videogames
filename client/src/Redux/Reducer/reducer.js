//importamos las actions-type

import { CLEAR_DETAILS, FILTRO, GET_DETAILS, GET_GAMES, GET_GENRES, PAGINACION, SEARCH_GAME } from "../Action/actions-types";


//definir el initial state

let initialState={
    allVideoGames:[],
    allGenres:[],
    details:{},
    currentPage:0,
    gamesBackUp:[]
    
}


//def del rootreducer
function rootReducer(state=initialState,action){
    const itemPage=15
    
    switch (action.type) {
        case GET_GAMES:{
            return {
                ...state,
                allVideoGames:[...action.payload].splice(0,itemPage),
                gamesBackUp:action.payload
            }
        }
        case GET_GENRES:
            return {
                ...state,
                allGenres:action.payload
            }
        case SEARCH_GAME:{
            return {
                ...state,
                allVideoGames:action.payload
            }
        }
        case GET_DETAILS:{
            console.log(action.payload)
            return {
                ...state,
                details:action.payload
            }
        }
        case CLEAR_DETAILS:{
            return {
                ...state,
                details:{}
            }    
        }
        case PAGINACION:
            const next_page=state.currentPage +1
            const prev_page=state.currentPage -1
            const firstIndex= action.payload==="next"? next_page*itemPage : prev_page*itemPage
            
            if(action.payload==="next" &&firstIndex>=state.gamesBackUp.length)return state
            else if(action.payload==="prev" && firstIndex>=state.gamesBackUp.length)return state


            return{
                ...state,
                allVideoGames:[...state.gamesBackUp].splice(firstIndex,itemPage),
                
                currentPage:action.payload==="next"?next_page : prev_page
            }
        case FILTRO:
            switch (action.payload) {
                
                case "AZ":
                    let ascendente = [...state.gamesBackUp].sort((prev,next)=>{
                        if(prev.nombre>next.nombre)return 1
                        if(prev.nombre<next.nombre)return -1
                        return 0
                    })
                    return{
                        ...state,
                        allVideoGames:[...ascendente].splice(0,itemPage),
                        gamesBackUp:ascendente,
                        currentPage:0
                        
                       
                    }
                case "ZA":
                    let descendente = [...state.gamesBackUp].sort((prev,next)=>{
                        if(next.nombre>prev.nombre)return 1
                        if(next.nombre<prev.nombre)return -1
                        return 0
                    })
                    return{
                        ...state,
                        allVideoGames:[...descendente].splice(0,itemPage),
                        gamesBackUp:descendente,
                        currentPage:0
                       
                    }
                    case "MayorRai":
                        let mayorRai = [...state.gamesBackUp].sort((prev,next)=>{
                            if(prev.rating>next.rating)return 1
                            if(prev.rating<next.rating)return -1
                            return 0
                        })
                        return{
                            ...state,
                            allVideoGames:[...mayorRai].splice(0,itemPage),
                            gamesBackUp:mayorRai,
                            currentPage:0
                            
                           
                        }
                    case "MenorRai":
                        let menorRai = [...state.gamesBackUp].sort((prev,next)=>{
                            if(next.rating>prev.rating)return 1
                            if(next.rating<prev.rating)return -1
                            return 0
                        })
                        return{
                            ...state,
                            allVideoGames:[...menorRai].splice(0,itemPage),
                            gamesBackUp:menorRai,
                            currentPage:0  
                        }


                default : return state
                    break;
            }
        case "RESET":
            return{
                ...state,
                allVideoGames:[...state.gamesBackUp].splice(0,itemPage),
                currentPage:0
            }
        case "FILTRO_GAME":
            let filterByGenres=[...state.gamesBackUp].filter((g)=>g.genres && g.genres.includes(action.payload));
            
            return {
                ...state,
                allVideoGames:[...filterByGenres].splice(0,itemPage),
                //gamesBackUp:filterByGenres
                //filter:true
            }

        default: return state;
            
    }
}

export default rootReducer