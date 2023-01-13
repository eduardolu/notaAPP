import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'


export const RegiterPage = () => {
  return (
    <AuthLayout title='Registro'>
      <form>
          <Grid container >
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label='Nombre' type='nombre' placeholder='nombre completo' fullWidth />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label='correos' type='email' placeholder='correo de usuario' fullWidth />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label='password' type='password' placeholder='contraseña' fullWidth />
            </Grid>

            <Grid container sx={{ mb:2, mt:1 }}>
              <Grid item xs={12}>
                <Button variant='contained' fullWidth>
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
