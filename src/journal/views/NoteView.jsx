import {
  DeleteOutlined,
  SaveOutlined,
  UploadOutlined,
} from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { useEffect, useMemo, useRef } from 'react'
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from '../../store/journal'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

function NoteView() {
  const dispatch = useDispatch()
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal)
  const { title, body, date, onInputChange, formState } = useForm(note)

  const dateString = useMemo(() => {
    const dateObj = new Date(date)
    return dateObj.toUTCString()
  }, [date])

  const fileInputRef = useRef(null)

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: messageSaved,
      })
    }
  }, [messageSaved])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return

    dispatch(startUploadingFiles(target.files))
  }

  const onDelete = () => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Esta accion no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDeletingNote())

        Swal.fire('Borrado', 'Nota borrada', 'success')
      }
    })
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
        <input
          type='file'
          multiple
          onChange={onFileInputChange}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        <IconButton
          color='primary'
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}>
          <UploadOutlined />
        </IconButton>
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color='primary'
          variant='contained'>
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
      <Grid container justifyContent='end'>
        <IconButton
          color='error'
          onClick={onDelete}
          sx={{
            my: 1,
          }}>
          <DeleteOutlined />
          <Typography variant='h6'>Borrar</Typography>
        </IconButton>
      </Grid>

      <ImageGallery images={note.imageUrls} />
    </Grid>
  )
}

export default NoteView
