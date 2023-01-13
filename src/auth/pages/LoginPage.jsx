import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import {Google} from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>

        <form>
          <Grid container >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} sx={{mt:1}}>
                <TextField label='correos' type='email' placeholder='correo de usuario' fullWidth />
              </Grid>
              <Grid item xs={12} md={6} sx={{mt:1}}>
                <TextField label='password' type='password' placeholder='correo de usuario' fullWidth />
              </Grid>
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}>
              <Grid item xs={12} sm={6} >
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
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
