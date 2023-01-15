import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useFrom } from '../../hooks'
import { startCreatingWithEmailPassword } from '../../store/auth'
import { AuthLayout } from '../layout/AuthLayout'

const formData ={
    email: '',
    password: '',
    displayName: '',
}

const formValidation = {
  email: [(value) => value.includes('@'),'el correo debe tener una @'],
  password: [(value) => value.length >= 6,'el password debe de tener mas de 6 letras'],
  displayName: [(value) => value.length >= 3,'el nombre es obrigatorio y debe ser mayor que 3 letras'],
}

export const RegiterPage = () => {
  const dispatch = useDispatch()
  const [formsubmitted, setFormsubmitted] = useState(false)

  const {
    displayName, email, password, onInputChange, FromState, 
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useFrom(formData, formValidation);
  const onSubmit= (event)=>{
    event.preventDefault();
    setFormsubmitted(true)
    if(!isFormValid) return;
    dispatch(startCreatingWithEmailPassword(FromState))
  }

  return (
    <AuthLayout title='Registro'>
      <form onSubmit={onSubmit}>
          <Grid container >
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label='Nombre' type='nombre' placeholder='nombre completo'
               fullWidth name='displayName' value={displayName} onChange={onInputChange}
               error={!!displayNameValid && formsubmitted }
               helperText={displayNameValid}
               />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label='correos' type='email' placeholder='correo de usuario'
               fullWidth name='email' value={email} onChange={onInputChange}
               error={!!emailValid && formsubmitted }
               helperText={emailValid}
               />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label='password' type='password' placeholder='contraseña'
               fullWidth name='password' value={password} onChange={onInputChange}
               error={!!passwordValid && formsubmitted }
               helperText={passwordValid}
               />
            </Grid>

            <Grid container sx={{ mb:2, mt:1 }}>
              <Grid item xs={12}>
                <Button type='submit' variant='contained' fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
              
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>¿ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}
