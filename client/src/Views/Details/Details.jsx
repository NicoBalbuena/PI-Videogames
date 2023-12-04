import React from 'react'
import  {useSelector} from "react-redux"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch } from 'react-redux'
import { useEffect} from 'react'
import { clearDetails, getGamesId } from '../../Redux/Action/action'
//import "../Card/Card.css"

const Details = () => {
  const dispatch=useDispatch()
  const params=useParams()
  
  const details=useSelector(state=>state.details)
  

  useEffect(()=>{
    dispatch(getGamesId(params.id))
    return ()=>{
      dispatch(clearDetails())
    }
  },[params.id, dispatch])
  


  return (
    details.imagen? (
      <div className='container'>
      <div>
        <img src={details.imagen} alt="Imagen videojuego"/>
      </div>
      <div className='container-elem'>{details.id}</div>
      <div className='container-elem'>{details.nombre}</div>
      <div className='container-elem'>{details.plataformas}</div>
      <div className='container-elem'>{details.descripcion}</div>
      <div className='container-elem'>{details.fechaDeLanzamiento}</div>
      <div className='container-elem'>{details.rating}</div>
      <div className='container-elem'>{details.genero}</div>
    </div>) : (<div><h1>Cargado...</h1></div>)
    
    
  )
}

export default Details
