import { Route, Routes } from 'react-router-dom'
import { AuthRouter } from '../auth/router/authRouter'
import { JournalRouter } from '../journal/router/JournalRouter'
export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRouter />} />
        <Route path='/*' element={ <JournalRouter />} />
    </Routes>
  )
}
