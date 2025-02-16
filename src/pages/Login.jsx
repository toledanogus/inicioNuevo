import { useDispatch, useSelector } from "react-redux";
import { setName } from "../store/slices/generalesSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  //Constantes
  const dispatch = useDispatch();
  const { nombre } = useSelector((state) => state.generales);
  const navigate = useNavigate();
  

  //Funciones

  const onInputChange = ({ target }) => {
    dispatch(setName(target.value) );
  };

  const toIndice = () => {
    if (!nombre) {
        alert('Escribe tu nombre por favor')
    } else {
        navigate("/Indice");
    }
    
  };

  return (
    <>
      <div>Login</div>
      <h1>¡Bienvenido!</h1>
      <p> Escribe tu nombre para continuar:</p>
      <input type="text" value={nombre} onChange={onInputChange} />
      <p>{nombre}</p>
      <button type="button" onClick={toIndice}>
        Ir al índice
      </button>
    </>
  );
};
