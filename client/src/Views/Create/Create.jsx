import React, { useEffect, useState } from 'react'
import "./create.css"
import { getGenero, getVideogames, postGame } from '../../Redux/Action/action'
import  {useDispatch, useSelector} from "react-redux"

const Create = () => {

  const dispatch=useDispatch();

  const allGenres=useSelector(state=>state.allGenres)


  useEffect(()=>{
   const response= dispatch(getGenero())
  },[])

  const [state,setState]=useState({
    nombre:"",
    imagen:"",
    descripcion:"",
    plataformas:[],
    fechaDeLanzamiento:"",
    rating:0,
    genero:[]
  })

  const [errors,setErrors]=useState({
    nombre:"Campo requerido",
    imagen:"Campo requerido",
    plataformas:"Campo requerido",
    fechaDeLanzamiento:"Campo requerido",
    rating:"Campo requerido",
    generos:"Campo requerido",
    descripcion:"Campo requerido",
  })
  

  const validate=(state,name)=>{
    switch (name) {
      case "nombre":
        if(state.nombre==="")setErrors({...errors,nombre:"Campo requerido."})
       else if(state.nombre.length <5)setErrors({...errors,nombre:"Nombre debe ser mayor a 5 caracteres"})  
       else setErrors({...errors,nombre:""})
      break;

      case "fechaDeLanzamiento":
      if (state.fechaDeLanzamiento.length === 0) {
        setErrors({ ...errors, fechaDeLanzamiento: "Campo requerido." });
      } else {
        setErrors({ ...errors, fechaDeLanzamiento: "" });
      }
      break;
      
      case "imagen":
      if (state.imagen === "") {
        setErrors({ ...errors, imagen: "Campo requerido." });
      } else if (!/\.(png|jpg)$/i.test(state.imagen)) {
        setErrors({ ...errors, imagen: "Formato de imagen no válido. Debe ser PNG o JPG" });
      } else {
        setErrors({ ...errors, imagen: "" });
      }
      break;

      case "descripcion":
        if(state.descripcion===""){
          setErrors({...errors,descripcion:"Campo requerido."})
      }else if(state.descripcion.length < 10){
          setErrors({...errors,descripcion:"Debe contener una descripcion mayor a 10 caracteres"})  
      }else{
          setErrors({...errors,descripcion:""})
      }
      break;

      case "rating":
      if (state.rating === "") {
        setErrors({ ...errors, rating: "Campo requerido." });
      } else {
        const ratingValue = parseFloat(state.rating);

        if (isNaN(ratingValue) || ratingValue < 0 || ratingValue > 5 || !/^\d+(\.\d)?$/.test(state.rating)) {
          setErrors({
            ...errors,
            rating: "El rating debe ser un número entre 0 y 5, admitiendo hasta un decimal.",
          });
        } else {
          setErrors({ ...errors, rating: "" });
        }
      }
      break;

      case "plataformas":
      if (state.plataformas.length < 1) {
        setErrors({ ...errors, plataformas: "Debe ingresar al menos una plataforma" });
      } else {
        
        setErrors({ ...errors, plataformas: "" });

      }
      break;

    case "genero":
      if (state.genero.length === 0) {
        setErrors({ ...errors, generos: "Debe seleccionar al menos un género" });
      } else {
        setErrors({ ...errors, generos: "" });
      }
      break;
    
      default:
        break;
    }
  }

  const handleChange = (event) => {
  let updatedState;

  if (event.target.name === "genero") {
    updatedState = {
      ...state,
      genero: [...state.genero, event.target.value],
    };
  } else if (event.target.name === "plataformas") {
    const value = document.getElementById("plataformas").value;
    updatedState = {
      ...state,
      plataformas: [...state.plataformas, value],
    };
    document.getElementById("plataformas").value = "";
  } else {
    updatedState = {
      ...state,
      [event.target.name]: event.target.value,
    };
  }

  setState(updatedState);


  validate(updatedState, event.target.name);
};

  const disableFunction = () => {
    for (const error in errors) {
      if (errors[error] !== "") {
        return true; 
      }
    }
    return false;
  };
  

  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(postGame(state))
  }

  return (
    <div className='form-cont'>
      
      <form onSubmit={handleSubmit}>
        {console.log(state.fechaDeLanzamiento)}
        <label>Nombre:</label>
        <input  name="nombre" onChange={handleChange} type='text'></input>
        {errors.nombre}
        <label>Imagen</label>
        <input  onChange={handleChange}  name="imagen" type='text'></input>
        <div><p>{errors.imagen}</p></div>
        <label>Descripción</label>
        <input  onChange={handleChange}  name="descripcion" type='text'></input>
        {errors.descripcion}
        <label>Plataformas:</label>
        <input id='plataformas' name="plataformas" type='text'></input>
        <button name="plataformas" onClick={handleChange} type='button'>Agregar</button>
        <div>
          <p>Plataformas seleccionadas:</p>
          {state.plataformas.length > 0 && (
            <p>{state.plataformas.join(", ")}</p>
          )}
        </div>
        {errors.plataformas}
        <label>Fecha de lanzamiento</label>
        <input  onChange={handleChange}  name="fechaDeLanzamiento" type='text'></input>
        {errors.fechaDeLanzamiento}
        <label>Rating</label>
        <input  onChange={handleChange}  name="rating" type='text'></input>
        {errors.rating}
        <label>Genero</label>
        <select onChange={handleChange} name="genero" id="">
          {allGenres.map((genero) => (
            <option key={genero} value={genero}>
              {genero}
            </option>
          ))}
        </select>
        <div>
          <p>Opciones seleccionadas:</p>
          {state.genero !== "Elegir un genero" && (
            <p>{state.genero.join(", ")}</p>
          )}
        </div>
        <div><p>{errors.generos}</p></div>

        <input disabled={disableFunction()} type='submit'></input>
      </form>
    </div>
  )
}

export default Create
