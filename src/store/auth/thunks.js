import {
  loginWithEmailPassword,
  logoutFireBase,
  registerWithEmailPassword,
  signInWithGoogle,
} from '../../firebase/providers'
import { checkCredentials, login, logout } from './'

export const startGoogleSignIn = (/* params */) => {
  return async (dispatch) => {
    dispatch(checkCredentials())
    const result = await signInWithGoogle()
    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }))

    dispatch(login(result))
  }
}

export const startEmailPasswordRegister = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkCredentials())
    const { ok, uid, photoURL, errorMessage } = await registerWithEmailPassword(
      {
        email,
        password,
        displayName,
      }
    )

    if (!ok) return dispatch(logout({ errorMessage }))

    dispatch(login({ email, displayName, uid, photoURL }))
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkCredentials())
    const result = await loginWithEmailPassword({ email, password })
    if (!result.ok) return dispatch(logout(result))
    dispatch(login(result))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFireBase()
    dispatch(logout({  }))
  }
}
