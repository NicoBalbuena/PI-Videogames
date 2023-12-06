import axios from "axios";
import { CLEAR_DETAILS, FILTRO, FILTRO_GAME, FILTRO_ORIGEN, FILTRO_TODOS, GET_DETAILS, GET_GAMES, GET_GENRES, PAGINACION, RESET, SEARCH_GAME } from "./actions-types";


export function postGame(state){
    return async function(){
            try {
            await axios.post("http://localhost:3001/postgame/",state)
            alert("Videogame creado")
        } catch (error) {
            alert("Hubo un problema al crear el video game: ",error.response.data.error)
        }
    }
}


export function getGenero(){
    return async function(dispatch){
        try {
            const response=await axios.get("http://localhost:3001/genres")
            return dispatch({
                type:GET_GENRES,
                payload:response.data
            })
        } catch (error) {
            alert(error.response.data.error)
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
        console.log(id)
        try {
            
            const response=await axios.get(`http://localhost:3001/videogames?id=${id}`)
            dispatch({
                
                type:GET_DETAILS,
                payload:response.data,
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
    console.log("viene aca")
    return  function(dispatch){
        try {
            dispatch({
                type:RESET,
            })
        } catch (error) {
            console.log(error)
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

export function origenGames(order){
    return  function(dispatch){
        try {
            dispatch({
                type:FILTRO_ORIGEN,
                payload:order
            })
            
        } catch (error) {
            
        }
    }
}




