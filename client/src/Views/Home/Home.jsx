import React, { useEffect } from 'react'
import Cards from '../../Components/Cards/Cards'
import { filterGame, filtro, getGames, getGenero, origenGames, page, resetGames } from '../../Redux/Action/action'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
  const dispatch=useDispatch()
  const allGenres=useSelector(state=>state.allGenres)

  useEffect(()=>{
    dispatch(getGames())
  },[])
  useEffect(()=>{
    const response= dispatch(getGenero())
   },[])
 

  const paginacion=(event)=>{
    dispatch(page(event.target.name))
  }
  const filtros=(event)=>{
    dispatch(filtro(event.target.name))
  }

  const reset=()=>{
    dispatch(resetGames())
  }

  const filterGames=(event)=>{
    
    dispatch(filterGame(event.target.value))
    console.log(event.target.value)
  }
  const origenGame=(event)=>{
    
    dispatch(origenGames(event.target.name))
    console.log(event.target.name)
  }
  

  return (
    <div className='home-cont'>
      <div>
        <button  onClick={reset}>Reset filtros/ordenamientos</button>
      </div>
      <div>
        <label>Ordenamientos</label>
        <button name="AZ" onClick={filtros}>AZ</button>
        <button name="ZA"onClick={filtros}>ZA</button>
        <button name="MayorRai" onClick={filtros}>Mayor Raiting</button>
        <button name="MenorRai"onClick={filtros}>Menor Raiting</button>
      </div>
      <div>
        <label >Filtros</label>
        <select  onChange={filterGames} name="genres" id="">
          {allGenres.map(genres => <option value={genres}>{genres}</option>)}
        </select>
        <button name="DB" onClick={origenGame}>Videos Games Creados</button>

        <button name="API" onClick={origenGame}>Videos Games</button>
      </div>
      <div>
        <label>Paginado</label>
        <button name="prev" onClick={paginacion}>Prev</button>
        <button name="next"onClick={paginacion}>Next</button>
      </div>
      <Cards/>
    </div>
  )
}

export default Home