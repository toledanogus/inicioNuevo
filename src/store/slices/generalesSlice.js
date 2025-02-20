import { createSlice } from '@reduxjs/toolkit'

export const generalesSlice = createSlice({
name: 'generales',
  initialState:{
    nombre: '',
    puntaje: 0,
    nivelMax: 1,
    nivelActual: 1,
  },
  reducers: {
    setName: (state, action) => {
        state.nombre = action.payload
    },
    setNivelMax: (state, action) => {
        state.nivelMax = action.payload
    },
    setNivelActual: (state, action) => {
        state.nivelActual = action.payload
    },
  },
})
// Action creators are generated for each case reducer function
export const { setName, setNivelMax, setNivelActual} = generalesSlice.actions