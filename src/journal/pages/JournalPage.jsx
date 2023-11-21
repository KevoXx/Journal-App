import { IconButton } from '@mui/material'
import JournalLayout from '../layout/JournalLayout'
import { NoteView, NothingSelected } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'

function JournalPage() {
  const { isSaving, active } = useSelector((state) => state.journal)
  const dispatch = useDispatch()
  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <JournalLayout>
      {active ? <NoteView /> : <NothingSelected />}

      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        size='large'
        sx={{
          backgroundColor: 'error.main',
          position: 'fixed',
          bottom: 50,
          right: 50,
          zIndex: 100,
          // Hover
          '&:hover': {
            backgroundColor: 'error.main',
            opacity: 0.9,
          },
          // Transition
          transition: 'all 0.3s ease-in-out',
        }}>
        <AddOutlined sx={{ fontSize: 30, color: 'white' }} />
      </IconButton>
    </JournalLayout>
  )
}

export default JournalPage
