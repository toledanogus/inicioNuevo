import React from 'react'
import { useSelector } from 'react-redux'

export const Operaciones = () => {

  //Constantes
const {nivel} = useSelector ((state)=> state.generales)


  // Funciones




  //Efectos



  return (

    <>
    
    <div>Operaciones</div>
    <p>Estás en el nivel {nivel}</p>
    
    </>
    
  )
}
