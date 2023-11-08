import { StarOutlined } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'

function NothingSelected() {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: 'calc(100vh - 64px)',
        bgcolor: 'primary.main',
        borderRadius: '10px',
      }}>
      <Grid item xs={12}>
        <StarOutlined sx={{ fontSize: '100px', color: 'white' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ color: 'white' }}>
          Selecciona una entrada
        </Typography>
      </Grid>
    </Grid>
  )
}

export default NothingSelected
