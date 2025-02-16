import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Indice } from '../pages/Indice'
import { Operaciones } from '../pages/Operaciones'
import { Resultados } from '../pages/Resultados'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="indice" element={<Indice />} />
        <Route path="operaciones" element={<Operaciones />} />
        <Route path="resultados" element={<Resultados />} />
        <Route path="/" element={<Navigate to="login" />} />
    </Routes>
  )
}
