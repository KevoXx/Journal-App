import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import SideBarItem from './SideBarItem'

function SideBar({ drawerWidth }) {
  const { displayName } = useSelector((state) => state.auth)
  const { notes } = useSelector((state) => state.journal)

  return (
    <Box
      component={'nav'}
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        [`& .MuiDrawer-paper`]: {
          boxSizing: 'border-box',
          width: drawerWidth,
        },
      }}>
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            {displayName || 'Journal'}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
}

export default SideBar
