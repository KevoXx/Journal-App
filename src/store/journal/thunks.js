import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import {
  addNewEmptyNote,
  isCreatingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
} from './'
import { loadNotes } from '../../helpers'

export const startNewNote = (/* params */) => {
  return async (dispatch, getState) => {
    dispatch(isCreatingNewNote())

    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))

    const setDocResp = await setDoc(newDoc, newNote)

    console.log({ newDoc, setDocResp })

    newNote.id = newDoc.id

    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = (/* params */) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    if (!uid) throw new Error('UID not found')

    const notes = await loadNotes(uid)

    dispatch(setNotes(notes))
  }
}

export const startSaveNote = (/* params */) => {
  return async (dispatch, getState) => {
    dispatch(setSaving())
    const { uid } = getState().auth
    if (!uid) throw new Error('UID not found')

    const { active: note } = getState().journal

    const noteToSave = { ...note }
    delete noteToSave.id

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)

    await setDoc(docRef, noteToSave, { merge: true })
  }
}
