import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getLevel } from '../store/thunks';

export const Operaciones = () => {

  //Constantes
const {nivelActual, nivelMax} = useSelector ((state)=> state.generales);
const [number1, setNumber1] = useState(null);
const [number2, setNumber2] = useState(null);
const dispatch = useDispatch();

  // Funciones
const lvone = () => {
  setNumber1(Math.floor(Math.random()*100)+1);
  setNumber2(Math.floor(Math.random()*9)+1);
}

const lvtwo = () => {
  setNumber1(Math.floor(Math.random()*100)+1);
  setNumber2(Math.floor(Math.random()*100)+1);
}


  //Efectos
useEffect(() => {
  // dispatch(getLevel());
  if (nivelActual==1) {
    lvone();
  } else if (nivelActual==2){
    lvtwo();
  }
  }
, [])



  return (

    <>
    
    <div>Operaciones</div>
    <p>Nivel Máximo: {nivelMax}</p>
    <h3>{number1}</h3>
    <h3>+</h3>
    <h3>{number2}</h3>
    
    </>
    
  )
}
