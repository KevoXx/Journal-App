import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components'

function NoteView() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent='space-between'
      sx={{
        mb: 1,
      }}
      className='animate__animated animate__fadeIn animate__faster'>
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          7 de Noviembre de 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button color='primary' variant='contained'>
          <SaveOutlined
            sx={{
              fontSize: 30,
              mr: 1,
            }}
          />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Algun titulo'
          label='Titulo'
          sx={{
            mb: 1,
          }}
        />
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          minRows={5}
          placeholder='Que paso hoy?'
          sx={{
            mb: 1,
          }}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  )
}

export default NoteView
