import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'

function LoginPage() {
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.auth)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const { email, password, onInputChange } = useForm({
    email: 'kevo@gmail.com',
    password: '123456',
  })

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(checkingAuthentication(email, password))
  }

  const onGoogleLogin = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <>
      <Typography variant='h5' align='center'>
        Login
      </Typography>

      <form onSubmit={onSubmit}>
        <Grid container sx={{ padding: '20px' }}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Email'
              type='email'
              variant='outlined'
              placeholder='Enter your email'
              name='email'
              onChange={onInputChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              type='password'
              label='Password'
              variant='outlined'
              placeholder='Enter your password'
              name='password'
              onChange={onInputChange}
              value={password}
            />
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button fullWidth variant='contained' type='submit'>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                fullWidth
                variant='contained'
                onClick={onGoogleLogin}>
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
