import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startEmailPasswordRegister } from '../../store/auth'

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo no es válido'],
  password: [
    (value) => value.length >= 6,
    'La contraseña debe tener al menos 6 caracteres',
  ],
  displayName: [(value) => value.trim().length > 0, 'El nombre es obligatorio'],
}

function RegisterPage() {
  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useSelector((state) => state.auth)
  const isCheckingAuthentication = useMemo(
    () => status === 'checking',
    [status]
  )

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(formData, formValidations)

  const onSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if (!isFormValid) return
    dispatch(startEmailPasswordRegister(formState))
  }
  return (
    <>
      <Typography variant='h5' align='center'>
        Sign Up
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container sx={{ padding: '20px' }}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Nombre completo'
              type='text'
              variant='outlined'
              placeholder='Ingrese su nombre completo'
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Email'
              variant='outlined'
              placeholder='Enter your email'
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Password'
              variant='outlined'
              placeholder='Enter your password'
              type='password'
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12} display={errorMessage ? 'block' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={isCheckingAuthentication}
                fullWidth
                variant='contained'
                type='submit'>
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
