import { operacionesApi } from "../api/operacionesApi";


export const getNivel = () => async (dispatch, getState) =>{
    const state = getState();
    const nivel = state.generales.nivel;
    
    const jsonNivel = new Object();
    jsonNivel["level"] = nivel;

    const {data} = await operacionesApi.post (`/enviar.php`, jsonNivel);
}