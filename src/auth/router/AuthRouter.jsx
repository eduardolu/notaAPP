
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegiterPage } from '../pages'

export const AuthRouter = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginPage />}/>
        <Route path="register" element={<RegiterPage />}/>
        <Route path='/*' element= {<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}