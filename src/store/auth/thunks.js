import { signInWithGoogle } from '../../firebase/providers'
import { checkCredentials } from './'

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
    try {
      dispatch(checkCredentials())
      const res = await signInWithGoogle()
      console.log({res})
    } catch (error) {
      console.log(error)
    }
  }
}
