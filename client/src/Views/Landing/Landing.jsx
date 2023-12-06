import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import play from '../../Components/Imagen/play.jpg'
import style from '../Landing/landing.module.css'


const Landing = () => {
  return (
    <div className='container'>
        <div className='link-cont' >
          <Link to={"/home"}>
            <button>Start</button>
          </Link>
        </div>
        <div className='img-cont'>
          <img src={play} alt="" />
        </div>
        <div className='p-container'>
          <p>Bienvenidos a un mundo de juegos!</p>
        </div>
</div>
  )
}

export default Landing