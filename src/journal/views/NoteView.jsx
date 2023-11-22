import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { useEffect, useMemo } from 'react'
import { setActiveNote, startSaveNote } from '../../store/journal'

function NoteView() {
  const dispatch = useDispatch()

  const { active: note } = useSelector((state) => state.journal)
  const { title, body, date, onInputChange, formState } = useForm(note)

  const dateString = useMemo(() => {
    const dateObj = new Date(date)
    return dateObj.toUTCString()
  }, [date])

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }
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
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button
        onClick={onSaveNote}
        color='primary' variant='contained'>
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
          name='title'
          value={title}
          onChange={onInputChange}
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
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  )
}

export default NoteView
