import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import PropTypes from 'prop-types'
import preferredTheme from './preferedTheme'

function AppTheme({ children }) {
  return (
    <ThemeProvider theme={preferredTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

AppTheme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppTheme
