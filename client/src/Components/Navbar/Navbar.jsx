import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Home from '../../Views/Home/Home'
import Create from '../../Views/Create/Create'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <Link to='/create'>Registrar un video game</Link>
      
      <SearchBar></SearchBar>
      
    </div>
  )
}

export default Navbar