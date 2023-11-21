import { CircularProgress, Grid, Typography } from '@mui/material'

function CheckingAuth() {
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
      <Grid item>
        <CircularProgress color='warning' />
        {/* TExto */}
      </Grid>
      <Grid item>
        <Typography variant='h5' color='white' align='center'>
          Cargando
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CheckingAuth
