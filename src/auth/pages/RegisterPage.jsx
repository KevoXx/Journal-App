import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

const formData = {
  email: 'kevo@gmail.com',
  password: '123456',
  displayName: 'Kevin',
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo no es válido'],
  password: [
    (value) => value.length >= 6,
    'La contraseña debe tener al menos 6 caracteres',
  ],
  displayName: [(value) => value.trim().length > 0, 'El nombre es requerido'],
}

function RegisterPage() {
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations)

  console.log(displayNameValid, emailValid, passwordValid, isFormValid)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
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
              error
              helperText='El nombre es requerido'
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
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label='Password'
              variant='outlined'
              placeholder='Enter your password'
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ my: 2 }}>
            <Grid item xs={12}>
              <Button fullWidth variant='contained' type='submit'>
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
