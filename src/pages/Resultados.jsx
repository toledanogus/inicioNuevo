import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Resultados = () => {
//Constantes
const navigate = useNavigate();


//Funciones
const alIndice = () => {
  navigate('/indice');
}

const alLogin = () => {
  navigate('/login');
}
//Efectos




  return (
    <>
    
    
    <div>Resultados</div>
    <button type="button" onClick={alIndice}>Ir al índice</button>
    <br />
    <button type="button" onClick={alLogin}>Usuario Diferente</button>
    
  </>
    
  )
}
