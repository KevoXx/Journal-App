import { Box } from '@mui/material'
import PropTypes from 'prop-types'

const drawerWidth = 240;

function JournalLayout({children}) {
  return (
    <Box
      sx={{
        display: 'flex',
      }}>
      {/* Navbar */}
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
