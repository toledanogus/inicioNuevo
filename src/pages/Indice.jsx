import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setNivel } from "../store/slices/generalesSlice"


export const Indice = () => {
//Constantes
const {nombre} = useSelector ((state)=> state.generales)
const navigate = useNavigate();
const dispatch = useDispatch();

//Funciones
const nivel1 = () => {
  console.log('Se va al primer ejercicio');
  dispatch(setNivel(5))
  navigate('/operaciones')

}

const nivel2 = () => {

}

const nivel3 = () => {

} 



//Efectos


  return (
    <>
    
    <div>Indice</div>
    <h1>Hola, ¡{nombre}!</h1>
    <p>Progreso:</p>
    <ul>
      <li onClick={nivel1}>Nivel 1</li>
      <li>Nivel 2</li>
      <li>Nivel 3</li>
      <li>Nivel 4</li>
      <li>Nivel 5</li>
      <li>Nivel 6</li>
      <li>Nivel 7</li>
      <li>Nivel 8</li>
      <li>Nivel 9</li>
      <li>Nivel 10</li>
      <li>Nivel 11</li>
      <li>Nivel 12</li>
      <li>Nivel 13</li>
      <li>Nivel 14</li>
      <li>Nivel 15</li>
      <li>Nivel 16</li>
      <li>Nivel 17</li>
      <li>Nivel 18</li>
      <li>Nivel 19</li>
      <li>Nivel 20</li>
    </ul>
    
    </>
    
  )
}
