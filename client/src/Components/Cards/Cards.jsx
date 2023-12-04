import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import "../Card/Card.css"

const Cards = () => {

  const allVideoGames=useSelector(state=>state.allVideoGames)
  
  return (
    <div className='cards-cont'>
      {allVideoGames.map(game=> <Card
       info={game}/>)}
       
    </div>
  )
}

export default Cards