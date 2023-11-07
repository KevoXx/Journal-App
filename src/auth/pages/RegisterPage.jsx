import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'

function RegisterPage() {
  return (
    <>
      <Typography variant='h5' align='center'>
        Sign Up
      </Typography>

      <form>
        <Grid container sx={{ padding: '20px' }}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Nombre completo'
              type='text'
              variant='outlined'
              placeholder='Ingrese su nombre completo'
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Email'
              variant='outlined'
              placeholder='Enter your email'
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Password'
              variant='outlined'
              placeholder='Enter your password'
            />
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12}>
              <Button fullWidth variant='contained'>
                Crear cuenta 
              </Button>
            </Grid>
          </Grid>
          <Grid container gap={2} justifyContent='end'>
            <Grid item>
              <Typography>¿Ya tienes cuenta?</Typography>
            </Grid>
            <Grid item>
              <Link color='inherit' component={LinkRouter} to='/auth/login'>
                Iniciar sesión
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default RegisterPage
