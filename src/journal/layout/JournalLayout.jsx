import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { NavBar } from '../components';

const drawerWidth = 240;

function JournalLayout({children}) {
  return (
    <Box
      sx={{
        display: 'flex',
      }}>
      <NavBar drawerWidth={drawerWidth} />

      {/* Sidebar */}
      <Box
        component={'main'}
        sx={{
          flexGrow: 1,
          p: 3,
        }}>
        {/* Toolbar */}
        {children}
      </Box>
    </Box>
  )
}

JournalLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default JournalLayout
