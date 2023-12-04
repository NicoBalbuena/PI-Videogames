import axios from "axios";
import { CLEAR_DETAILS, FILTRO, FILTRO_GAME, GET_DETAILS, GET_GAMES, GET_GENRES, PAGINACION, RESET, SEARCH_GAME } from "./actions-types";


export function postGame(state){
    return async function(){
            try {
            await axios.post("http://localhost:3001/postgame/",state)
            console.log("Videogame creado")
        } catch (error) {
            console.log(error.response.data.error)
        }
    }
}


export function getGenero(state){
    return async function(dispatch){
        try {
            const response=await axios.get("http://localhost:3001/genres/")
            return dispatch({
                type:GET_GENRES,
                payload:response.data
            })
           
            
        } catch (error) {
            console.log(error.response.data.error)
        }
    }
}

export function searchGame(game){
    return async function(dispatch){
        try {
            const response=await axios.get(`http://localhost:3001/videogames?nombre=${game}`)
            dispatch({
                type:SEARCH_GAME,
                payload:response.data
            })
            console.log(response)
        } catch (error) {
            console.log(error.response.data.error)
        }
    }
}

export function getGames(){
    return async function(dispatch){
        try {
            const response=await axios.get("http://localhost:3001/videogames")
            dispatch({
                type:GET_GAMES,
                payload:response.data
            })
            console.log(response)
        } catch (error) {
            console.log(error.response.data.error)
        }
    }
}

export function getGamesId(id){
    return async function(dispatch){
        try {
            const response=await axios.get(`http://localhost:3001/videogames?id=${id}`)
            dispatch({
                type:GET_DETAILS,
                payload:response.data
            })
        } catch (error) {
            console.log(error.response.data.error)
        }
    }
}

export function clearDetails(){
    return async function(dispatch){
        try {
            dispatch({
                type:CLEAR_DETAILS,
            })
            
        } catch (error) {
            console.log(error.response.data.error)
        }
    }
}

export function page(order){
    return  function(dispatch){
        try {
            dispatch({
                type:PAGINACION,
                payload:order
            })
            
        } catch (error) {
            console.log(error.response.data.error)
        }
    }
}

export function filtro(order){
    return  function(dispatch){
        try {
            dispatch({
                type:FILTRO,
                payload:order
            })
            
        } catch (error) {
            
        }
    }
}

export function resetGames(){
    return  function(dispatch){
        try {
            dispatch({
                type:RESET,
            })
        } catch (error) {
            
        }
    }
}

export function filterGame(genres){
    return async function(dispatch){
        console.log(genres)
        try {
            dispatch({
                type:FILTRO_GAME,
                payload:genres
            })
            console.log("se va",dispatch)
        } catch (error) {
            console.log(error)
        }
    }
}



