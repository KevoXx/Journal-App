import { Box, Toolbar } from '@mui/material'
import PropTypes from 'prop-types'
import { NavBar, SideBar } from '../components'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const drawerWidth = 240

function JournalLayout({ children }) {
  const { status } = useSelector((state) => state.auth)

  if (status === 'unauthenticated') {
    return <Navigate to='/auth/login' />
  }

  return (
    <Box
      sx={{
        display: 'flex',
      }}
      className='animate__animated animate__fadeIn animate__faster'>
      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />
      <Box
        component={'main'}
        sx={{
          flexGrow: 1,
          p: 3,
        }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

JournalLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default JournalLayout
