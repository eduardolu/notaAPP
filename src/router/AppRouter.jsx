import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthRouter } from '../auth/router/authRouter'
import { JournalRouter } from '../journal/router/JournalRouter'
import { ChekingAuth } from '../UI'
import { useCheckAuth } from '../hooks'
export const AppRouter = () => {

  const {status} = useCheckAuth()
  
  if (status === 'cheking') {
    return <ChekingAuth />
  }

  return (
    <Routes>
      {
        status === 'autheticated'
        ? <Route path='/*' element={ <JournalRouter />} />
        : <Route path="/auth/*" element={ <AuthRouter />} />
      }
      <Route path='/*' element= {<Navigate to="/auth/login"/>}/>

        {/* <Route path="/auth/*" element={ <AuthRouter />} />
        <Route path='/*' element={ <JournalRouter />} /> */}
    </Routes>
  )
}
