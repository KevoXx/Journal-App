import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
  // {
  //   id,
  //   title,
  //   body,
  //   date,
  //   imageUrls [],
  // }
}
export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    isCreatingNewNote: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.active = action.payload
      state.messageSaved = ''
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true
      state.messageSaved = ''
    },
    updateNote: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      )
      state.messageSaved = `${action.payload.title} ,actualizado correctamente`
    },
    setPhotoToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
      state.isSaving = false
    },
    // deleteNote: (state, action) => {},
  },
})

// Action creators are generated for each case reducer function
export const {
  isCreatingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNote,
  setPhotoToActiveNote
} = journalSlice.actions
