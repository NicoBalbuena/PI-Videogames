import React, { useEffect, useState } from 'react'
import "./create.css"
import { getGenero, getVideogames, postGame } from '../../Action/action'
import  {useDispatch} from "react-redux"

const Create = () => {

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getGenero())
  },[])

  const [state,setState]=useState({
    nombre:"",
    imagen:"",
    descripcion:"",
    plataformas:[],
    fechaDeLanzamiento:"",
    rating:"",
    genero:[]
  })
  const handleChange=(event)=>{
    if(event.target.name==="genero"){
      setState({
        ...state,
        genero:[...state.genero, event.target.value]
      })
    }else if(event.target.name==="plataformas"){
      const value=document.getElementById("plataformas").value
      setState({
        ...state,
        [event.target.name]:[...state.plataformas,value]
    })
    document.getElementById("plataformas").value=""
    }else{
      setState({
      ...state,
      [event.target.name]:event.target.value
    })
    }
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(postGame(state))
  }

  return (
    <div className='form-cont'>
      {console.log(state)}
      <form onSubmit={handleSubmit}>
        
        <label>Nombre:</label>
        <input  name="nombre" onChange={handleChange} type='text'></input>
        
        <label>Imagen</label>
        <input  onChange={handleChange}  name="imagen" type='text'></input>
        <label>Descripción</label>
        <input  onChange={handleChange}  name="descripcion" type='text'></input>
        
        <label>Plataformas:</label>
        <input  id='plataformas' name="plataformas" type='text'></input>
        <button name="plataformas" onClick={handleChange} type='button'>Agregar</button>

        <label>Fecha de lanzamiento</label>
        <input  onChange={handleChange}  name="fechaDeLanzamiento" type='text'></input>
        <label>Rating</label>
        <input  onChange={handleChange}  name="rating" type='text'></input>
        
        <label>Genero</label>
        <select  onChange={handleChange} name="genero" id="">
          <option>Accion</option>
          <option>No accion</option>
          <option>No accion2</option>
        </select>
        
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default Create
