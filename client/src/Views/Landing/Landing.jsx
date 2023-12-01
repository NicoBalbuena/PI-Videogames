import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Landing = () => {
  return (
    <div>
      <Link to={"/home"}>
        <button >Go home</button>
      </Link>
      
    </div>
  )
}

export default Landing