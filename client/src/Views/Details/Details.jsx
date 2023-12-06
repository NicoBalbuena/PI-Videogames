import React from 'react'
import  {useSelector} from "react-redux"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch } from 'react-redux'
import { useEffect} from 'react'
import { clearDetails, getGamesId } from '../../Redux/Action/action'
import style from '../Details/Detail.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'

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
        <Link to='/home'>
           <button className={style.button}>Volver atras</button>
        </Link>
       
        <div className={style.detailImg}>
          <img src={details.imagen} alt="Imagen videojueg"/>
        </div>
        <div className={style.pContainers}>
          <p>ID: {details.id}</p>
        <p>Nombre: {details.nombre}</p>
        <p>PLataformas: {details.plataformas}</p>
        <p>Fecha de Lanzamiento: {details.fechaDeLanzamiento}</p>
        <p>Rating: {details.rating}</p>
        <p>
          Generos: {details.genero
            ? details.genero.join(' , ')
            : details.Genres.map(g => g.nombre).join(' , ') 
          }
        </p>
        </div>
        
        <div className={style.detailDescrip}>
           <p>    Descripcion:
            {details.descripcion}</p>
          </div>
      </div>
    ) : (
      <div><h1>Cargando...</h1></div>
    )
  );
}

export default Details
