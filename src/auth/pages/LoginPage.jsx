import { useSelector, useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import {Google} from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useFrom } from '../../hooks'
import { chekingGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'
import { useMemo } from 'react'

export const LoginPage = () => {
  const {status, errorMessage} = useSelector(state => state.auth)
  const dispatch =useDispatch()

  const {email, password, onInputChange} = useFrom({
    email: '',
    password: ''
  })

  const isAuthenticating = useMemo( ()=> status ==='cheking', [status])

  const onSubmit = (event) => {
     event.preventDefault();
     dispatch(startLoginWithEmailPassword({email,password}))
  }

  const onGoogleSignIn = ()=> {
    console.log('google sign');
    dispatch(chekingGoogleSignIn())
  }


  return (
    <AuthLayout title='Login'>

        <form onSubmit={onSubmit}>
          <Grid container >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{mt:1}}>
                <TextField label='correos' type='email' 
                placeholder='correo de usuario' fullWidth name='email' value={email} onChange={onInputChange}/>
              </Grid>
              <Grid item xs={12} md={6} sx={{mt:1}}>
                <TextField label='password' type='password' placeholder='correo de usuario' 
                fullWidth name='password' value={password} onChange={onInputChange}/>
              </Grid>
            </Grid>
            <Grid container
            display={!!errorMessage ? '': 'none'}
            sx={{mt:1}}
            >
              <Grid item xs={12}>
                <Alert severity='error'>{errorMessage}</Alert>
              </Grid>
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}>
              <Grid item xs={12} sm={6} >
                <Button disabled={isAuthenticating} type='submit' variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button disabled={isAuthenticating} variant='contained' fullWidth onClick={onGoogleSignIn}>
                  <Google /> <Typography sx={{ml:1}}>google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={RouterLink} color='inherit' to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
