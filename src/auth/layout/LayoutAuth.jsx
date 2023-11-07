import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'


function LayoutAuth() {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: '100vh',
        bgcolor: 'primary.main',
        padding: '20px',
        p: 4,
      }}>
      <Grid
        item
        xs={3}
        sx={{
          width: {md: '50%', sm: '80%', xs: '100%'},
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
