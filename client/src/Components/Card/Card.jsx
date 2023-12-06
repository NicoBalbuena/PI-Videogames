import React from 'react'
import styles from './Card.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom'


const Card = ({info}) => {

  return (
  <div className={styles.cardContainer}>
    <Link to={`/details/${info.id}`}>


        <div className={styles.cardImage}>
          <img src={info.imagen} alt="Imagen" />
        </div>
        <div className={styles.cardTitle}>
          <h3>{info.nombre}</h3>
        </div>
        <div className={styles.cardTitle}>
          <h5>Generos: {info.genres ? info.genres.join('  ') : info.Genres.map(g => g.nombre).join('  ')}</h5>
        </div>
        
    </Link>
  </div>
);
}

export default Card