import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active : null,
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
    },
    setNotes: (state, action) => {
        state.notes = action.payload
    },
    setSaving: (state) => {
        state.isSaving = true;
    },
    updateNote: (state, action) => {
        state.isSaving = false;
        state.notes = state.notes.map(note => note.id === action.payload.id ? action.payload : note)
    },
    deleteNote: (state, action) => {},
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
} = journalSlice.actions
