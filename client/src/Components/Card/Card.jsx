import React from 'react'
import "../Card/Card.css"
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Card = ({info}) => {
  return (
    <div>
      <Link to={`/details/${info.id}`}>

        <div className='card-cont'>
        <div className='nombre'>
        <h2>{info.nombre}</h2>

      </div>
      { <div className=''>
        <h2>Generos: {info.genres ? info.genres.join('  ') : 'Sin información de géneros'}</h2>
        
      </div> }

      <div className='image'>
        <img src={info.imagen} alt="Imagen" />
      </div>

      </div>
      </Link>
      
      
    </div>
  )
}

export default Card