import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'

function LayoutAuth() {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: '100vh',
        bgcolor: 'primary.main',
        p: 4,
      }}>
      <Grid
        item
        xs={3}
        sx={{
          width: {lg:'30%', md: '40%', sm: '70%', xs: '90%' },
          bgcolor: 'white',
          padding: 3,
          borderRadius: 2,
          boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
        }}>
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default LayoutAuth
