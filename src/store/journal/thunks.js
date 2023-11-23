import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import {
  addNewEmptyNote,
  deleteNoteById,
  isCreatingNewNote,
  setActiveNote,
  setNotes,
  setPhotoToActiveNote,
  setSaving,
  updateNote,
} from './'
import { fileUpload, loadNotes } from '../../helpers'

export const startNewNote = (/* params */) => {
  return async (dispatch, getState) => {
    dispatch(isCreatingNewNote())

    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      imageUrls: [],
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

    dispatch(updateNote(note))
  }
}

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving())

    const fileUploadPromises = []

    for (const file of files) {
      fileUploadPromises.push(fileUpload(file))
    }

    const photosUrls = await Promise.all(fileUploadPromises)

    dispatch(setPhotoToActiveNote(photosUrls))
  }
}

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    if (!uid) throw new Error('UID not found')

    const { active: note } = getState().journal

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    const resp = await deleteDoc(docRef)
    console.log(resp)

    dispatch(deleteNoteById(note.id))
  }
}
