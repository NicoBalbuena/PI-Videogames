import React, { useEffect } from 'react'
import Cards from '../../Components/Cards/Cards'
import { applyFiltros, filterGame, filtro, getGames, getGenero, origenGames, page, resetGames } from '../../Redux/Action/action'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Home.module.css';
import Footer from '../../Components/Footer/Footer'


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
  }
  const origenGame=(event)=>{
    dispatch(origenGames(event.target.name))
  }


  return (
    <div className={styles.homeConteiner}>
        <div className={styles.botonCont}>
            <div>
                <button onClick={reset}>Mostrar todos</button>
            </div>
            <div>
                <label>Ordenamientos</label>
                <button name="AZ" onClick={filtros}>AZ</button>
                <button name="ZA" onClick={filtros}>ZA</button>
                <button name="MayorRai" onClick={filtros}>Mayor Raiting</button>
                <button name="MenorRai" onClick={filtros}>Menor Raiting</button>
            </div>
            <div>
                <label>Filtros</label>
                <select onChange={filterGames} name="genres" id="">
                    <option value="">Selecciona tu genero</option>
                    {allGenres.map(genres => (
                        <option key={genres} value={genres}>
                            {genres}
                        </option>
                    ))}
                </select>
                <button name="DB" onClick={origenGame}>Videos Games Creados</button>
                <button name="API" onClick={origenGame}>Videos Games</button>
            </div>
            
        </div>
        <div className={styles['clearfix']}></div>
        <div className={styles['card-home']}>
            <Cards />
        </div>
        <div className={styles.pagContainer}>
                <button name="prev" onClick={paginacion}>Prev</button>
                <label>Paginado</label>
                <button name="next" onClick={paginacion}>Next</button>
            </div>
        <Footer></Footer>
    </div>
);
}

export default Home;