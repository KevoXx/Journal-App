import { registerWithEmailPassword, signInWithGoogle } from '../../firebase/providers'
import { checkCredentials, login, logout } from './'

export const checkingAuthentication = (/*email, password*/) => {
  return async (dispatch) => {
    try {
      dispatch(checkCredentials())
    } catch (error) {
      console.log(error)
    }
  }
}

export const startGoogleSignIn = (/* params */) => {
  return async (dispatch) => {
    dispatch(checkCredentials())
    const result = await signInWithGoogle()
    if (!result.ok) return dispatch(logout(result.errorMessage))

    dispatch(login(result))
  }
}

export const startEmailPasswordRegister = ({email,password,displayName }) => {
  return async (dispatch) => { 
    dispatch(checkCredentials())
    const resp = await registerWithEmailPassword({email,password,displayName })
    console.log(resp)
  }
}