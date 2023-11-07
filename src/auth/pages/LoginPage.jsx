import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'

function LoginPage() {
  return (
    <>
      <Typography variant='h5' align='center'>
        Login
      </Typography>

      <form>
        <Grid container sx={{ padding: '20px' }}>
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
            <Grid item xs={12} sm={6}>
              <Button fullWidth variant='contained'>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button fullWidth variant='contained'>
                <Google sx={{ mr: 1 }} />
                <Typography>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container gap={2} justifyContent='end'>
            <Grid item>
              <Typography>No tienes cuenta?</Typography>
            </Grid>
            <Grid item>
              <Link color='inherit' component={LinkRouter} to='/auth/register'>
                Crear cuenta
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default LoginPage
