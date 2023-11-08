import { IconButton } from '@mui/material'
import JournalLayout from '../layout/JournalLayout'
import { NoteView, NothingSelected } from '../views'
import { AddOutlined } from '@mui/icons-material'

function JournalPage() {
  return (
    <JournalLayout>
      <NothingSelected />
      {/* <NoteView /> */}

      <IconButton
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
