import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleAuthProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(FirebaseAuth, googleAuthProvider)
    const { displayName, email, photoURL, uid } = res.user

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}

export const registerWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    // console.log({ email, password, displayName })

    const res = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    )
    const { uid, photoURL } = res.user

    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
    })

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const res = await signInWithEmailAndPassword(FirebaseAuth, email, password)
    const { displayName, photoURL, uid } = res.user

    return {
      ok: true,
      displayName,
      photoURL,
      uid,
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}

export const logoutFireBase = async () => {
  try {
    await FirebaseAuth.signOut()

    return {
      ok: true,
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}
