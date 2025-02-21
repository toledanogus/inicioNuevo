import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import sonido from '../assets/clic1.wav';
import sonido2 from '../assets/clic2.mp3';
import { setNivelMax, setNumeroDificultad } from '../store/slices/generalesSlice';
// import { getLevel } from '../store/thunks';

export const Operaciones = () => {
  //Constantes
const {nivelActual, nivelMax, numeroDificultad} = useSelector ((state)=> state.generales);
const [number1, setNumber1] = useState(null);
const [number2, setNumber2] = useState(null);
const dispatch = useDispatch();
const [timer, setTimer] = useState(100);
const navigate = useNavigate();
const [resultadoUsuario, setResultadoUsuario] = useState("");
const [resultadoReal, setResultadoReal] = useState("");
const [puntaje, setPuntaje] = useState(0);
const [isProcessing, setIsProcessing] = useState(false);


  // Funciones

  const onInputChange = ({ target }) => {
    setResultadoUsuario(target.value);
  };

  const inicial = () => {
      setNumber1(Math.floor(Math.random() * 100) + 1);
      setNumber2(Math.floor(Math.random() * numeroDificultad) + 1);
      setResultadoUsuario("");
      setPuntaje(0);
    };   
  
  const lvone = () => {
    setIsProcessing(true);
    if (resultadoUsuario !== "" && resultadoReal == resultadoUsuario) {
      setPuntaje(puntaje + 1);
      console.log(puntaje)
      
      setNumber1(Math.floor(Math.random() * 100) + 1);
      setNumber2(Math.floor(Math.random() * numeroDificultad) + 1);
      setResultadoUsuario("");
      let audio = new Audio (sonido);
        audio.play();
        audio.volume = 0.4;
    }
    else if (resultadoUsuario !== "" && resultadoReal !== resultadoUsuario){
      let audio = new Audio (sonido2);
        audio.play();
        audio.volume = 0.4;
    }
    setIsProcessing(false);
  };

// const lvtwo = () => {
//   setNumber1(Math.floor(Math.random()*100)+1);
//   setNumber2(Math.floor(Math.random()*100)+1);
// }


  //Efectos
// useEffect(() => {
//   // dispatch(getLevel());
//   if (nivelActual==1) {
//     lvone();
//   } else if (nivelActual==2){
//     lvtwo();
//   }
//   }
// , [nivelActual]);

//Efectos
useEffect(() => {
  if (nivelActual >= 6 && nivelActual < 10) {
    dispatch(setNumeroDificultad(100));
  }else if (nivelActual < 6) {
    dispatch(setNumeroDificultad(9));
  }
}, [nivelActual, dispatch]);

useEffect(() => {
  inicial();
}, [numeroDificultad]);


useEffect(() => {
  if (timer === 0) {
    navigate("/Resultados");
  }
}, [timer, navigate]);

useEffect(() => {
  const interval = setInterval(() => {
    setTimer((prevTimer) => {
      if (prevTimer <= 0) {
        clearInterval(interval); // Detener el intervalo cuando el temporizador llega a cero
        return 0; // Establecer el temporizador en cero
      } else {
        return prevTimer - 1; // Reducir el temporizador en 1
      }
    });
  }, 1000);
  // Devolver una función de limpieza
  return () => clearInterval(interval);
}, []);



useEffect(() => {
  setResultadoReal(number1 + number2);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [number1, number2]);

useEffect(() => {
  switch (nivelActual) {
    case 1:
      if (puntaje === 3) {
        dispatch(setNivelMax(2));
        navigate("/Resultados");
      }
      break;
    case 2:
      if (puntaje === 5) {
        dispatch(setNivelMax(3));
        navigate("/Resultados");
      }
      break;
    case 3:
      if (puntaje === 6) {
        dispatch(setNivelMax(4));
        navigate("/Resultados");
      }
      break;
    case 4:
      if (puntaje === 7) {
        dispatch(setNivelMax(5));
        navigate("/Resultados");
      }
      break;
    case 5:
      if (puntaje === 10) {
        dispatch(setNivelMax(6));
        navigate("/Resultados");
      }
      break;
    case 6:
      if (puntaje === 3) {
        dispatch(setNivelMax(7));
        navigate("/Resultados");
      }
      break;
    default:
      break;
  }
}, [puntaje, nivelActual, dispatch, navigate]);


  return (

    <>
    <div>Operaciones</div>
    <h2>{timer}</h2>
    <p>Nivel Máximo: {nivelMax}</p>
    <h3>{number1}</h3>
    <h3>+</h3>
    <h3>{number2}</h3>
    <input
        type="number"
        id="number"
        value={resultadoUsuario}
        onChange={onInputChange}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            lvone();
          }
        }}
      />
    <p>{puntaje}</p>
    </>    
  )
}
