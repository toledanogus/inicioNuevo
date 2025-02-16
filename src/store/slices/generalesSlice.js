import { createSlice } from '@reduxjs/toolkit'

export const generalesSlice = createSlice({
name: 'generales',
  initialState:{
    nombre: '',
    puntaje: 0,
    nivel: 1,
  },
  reducers: {
    increment: (state) => {
      state.puntaje += 1;
      state.nombre = 'Gus'
    },
    decrement: (state) => {
        state.puntaje -=1
    },
    setName: (state, action) => {
        state.nombre = action.payload
    },

    setNivel: (state, action) => {
        state.nivel = action.payload
    }
  },
})
// Action creators are generated for each case reducer function
export const { increment, decrement, setName, setNivel} = generalesSlice.actions