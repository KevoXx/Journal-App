import { TurnedInNot } from '@mui/icons-material'
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import PropTypes from 'prop-types'

const meses = [
  {
    id: 1,
    nombre: 'Enero',
  },
  {
    id: 2,
    nombre: 'Febrero',
  },
  {
    id: 3,
    nombre: 'Marzo',
  },
  {
    id: 4,
    nombre: 'Abril',
  },
  {
    id: 5,
    nombre: 'Mayo',
  },
  {
    id: 6,
    nombre: 'Junio',
  },
  {
    id: 7,
    nombre: 'Julio',
  },
  {
    id: 8,
    nombre: 'Agosto',
  },
  {
    id: 9,
    nombre: 'Septiembre',
  },
  {
    id: 10,
    nombre: 'Octubre',
  },
  {
    id: 11,
    nombre: 'Noviembre',
  },
  {
    id: 12,
    nombre: 'Diciembre',
  },
]

function SirdeBar({ drawerWidth }) {
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
            Kevo Journal
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {meses.map((mes) => (
            <ListItem key={mes.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container justifyContent='space-between'>
                    <ListItemText primary={mes.nombre} />
                    <Typography variant='body2' color='text.secondary'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

SirdeBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
}

export default SirdeBar
