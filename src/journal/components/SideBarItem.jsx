import { TurnedInNot } from '@mui/icons-material'
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import PropTypes from 'prop-types'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

function SideBarItem({ title, body, id, date, imageUrls = [] }) {
  const dispatch = useDispatch()

  const onClickNote = () => {
    dispatch(setActiveNote({ id, title, body, date, imageUrls }))
  }

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.slice(0, 17) + '...' : title
  }, [title])

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container justifyContent='space-between'>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}

SideBarItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string),
}

export default SideBarItem
