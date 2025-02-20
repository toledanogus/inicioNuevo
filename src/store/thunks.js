import { operacionesApi } from "../api/operacionesApi";
import { setNivelMax } from "./slices/generalesSlice";

export const setNameThunks = () => async (dispatch, getState) =>{
    const state = getState();
    const nivel = state.generales.nivelMax;
    const nombre = state.generales.nombre;
    console.log(nivel);
    
    const jsonNivel = new Object();
    jsonNivel["level"] = nivel;
    jsonNivel["name"] = nombre;

    const {data} = await operacionesApi.post('/enviar.php', jsonNivel);
    data? dispatch(setNivelMax(data[2])) : null;
    console.log(data);
}

// export const getLevel = () => async (dispatch, getState) =>{
//     const state = getState();
//     const nombre = state.generales.nombre;
//     const jsonNivel = new Object();
//     jsonNivel["name"] = nombre;

//     const {data} = await operacionesApi.post('/recibir.php', jsonNivel);
//     dispatch(setNivel(data[2]));
//     console.log(data);
// }