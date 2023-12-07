import React, { useState } from 'react'
import { searchGame } from '../../Redux/Action/action'
import { useDispatch } from 'react-redux'

const SearchBar = () => {
    const[game,setGame]=useState("");
    const dispatch=useDispatch()

    const handleChange=(event)=>{
        setGame(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(searchGame(game))
    }


  return (
    <div>
        {console.log(game)}
        <form onSubmit={handleSubmit}>
            
            <input onChange={handleChange} type="text" />
            <input type="submit" /><p>Busca aqui tu juego preferido!</p>
        </form>
    </div>
  )
}

export default SearchBar