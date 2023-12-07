import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Home from '../../Views/Home/Home'
import Create from '../../Views/Create/Create'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import '../Navbar/Navbar.module.css'
import style  from './Navbar.module.css'


const Navbar = () => {
  return (
    
    <div className={style.mainContainer}>
      <div className='links-cont'>
        <Link to='/home'>Home</Link>
        <div><Link to='/create'>Crea tu propio video game!</Link></div>
      </div>
      <div>
        <SearchBar></SearchBar>
      </div>
      
      
    </div>
  )
}

export default Navbar