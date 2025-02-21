import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setNivelActual, setNumeroDificultad } from "../store/slices/generalesSlice"
import { useState } from "react"

export const Indice = () => {
//Constantes
const {nombre, nivelMax, nivelActual} = useSelector ((state)=> state.generales)
const navigate = useNavigate();
const dispatch = useDispatch();
const totalNiveles = Array.from({ length: 20 }, (_, index) => index + 1);

//Funciones

//Efectos

return (
  <>
    <div>Indice</div>
    <h1>Hola, ¡{nombre}! Actualmente te encuentras en el nivel {nivelMax}</h1>
    <p>Progreso:</p>
    <div className="container">
{totalNiveles.map((x) => (
  x <= nivelMax ? (
    <div className="nivelActivo" key={x} onClick={() => {
      dispatch(setNivelActual(x));
      navigate('/operaciones');
    }}>
      Nivel {x}
    </div>
  ) : (
    <div className="nivelInactivo" id="disabled" key={x}>Nivel {x}</div>
  )
))}
</div>
  </>
);
};

