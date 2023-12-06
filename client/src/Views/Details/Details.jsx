import React from 'react'
import  {useSelector} from "react-redux"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch } from 'react-redux'
import { useEffect} from 'react'
import { clearDetails, getGamesId } from '../../Redux/Action/action'
import style from '../Details/Detail.module.css'

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
  
  console.log(details)

  return (
    details.imagen ? (
      <div className={style.detailContainer}>
        <div className={style.detailImg}>
          <img src={details.imagen} alt="Imagen videojueg"/>
        </div>
        <p className='container-elem'>{details.id}</p>
        <p className='container-elem'>{details.nombre}</p>
        <p className='container-elem'>{details.plataformas}</p>
        <p className='container-elem'>{details.fechaDeLanzamiento}</p>
        <p className='container-elem'>{details.rating}</p>
        <p className='container-elem'>
          {details.genero
            ? details.genero // Si genero existe, úsalo
            : details.Genres.map(g => g.nombre).join('  ') // Si genero no existe, usa Genres
          }
        </p>
        <div className={style.detailDescrip}>
           <p>{details.descripcion}</p>
          </div>
      </div>
    ) : (
      <div><h1>Cargado...</h1></div>
    )
  );
}

export default Details
