import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  styled,
} from '@mui/material';
import React, { useState } from 'react';
import MuiDrawer from '@mui/material/Drawer';

const drawerWidth = '300px';

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    border: 'none',
    // background: 'linear-gradient(275deg, #ffffff 0%, #819ec51a 100%)',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    overflowY: 'hidden',
    boxSizing: 'border-box',
    ...(!open && {
      width: theme.spacing(10),
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }),
  },
}));

function SideBar() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  return (
    <Box>
      <Drawer
        variant="permanent"
        open={open}
        // sx={{
        //   '& .MuiDrawer-paper': {
        //     width: '240px',
        //   },
        // }}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem>
            <ListItemButton aria-selected disableRipple disableTouchRipple onClick={() => setSelected('home')} selected={selected === 'home'}>
              <ListItemIcon>
                <i
                  className="bi bi-house-door"
                  style={{
                    color: selected === 'home' ? '#fff' : '#0d6efd',
                    // fontSize: '1.5rem',
                  }}
                />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton disableRipple disableTouchRipple onClick={() => setSelected('dashboard')} selected={selected === 'dashboard'}>
              <ListItemIcon>
                <i
                  className="bi bi-speedometer2"
                  style={{
                    color: selected === 'dashboard' ? '#fff' : '#0d6efd',
                    // fontSize: '1.5rem',
                  }}
                />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton disableRipple disableTouchRipple onClick={() => setSelected('orders')} selected={selected === 'orders'}>
              <ListItemIcon>
                <i
                  className="bi bi-table"
                  style={{
                    color: selected === 'orders' ? '#fff' : '#0d6efd',
                    // fontSize: '1.5rem',
                  }}
                />
              </ListItemIcon>
              <ListItemText>Orders</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton disableRipple disableTouchRipple onClick={() => setSelected('products')} selected={selected === 'products'}>
              <ListItemIcon>
                <i
                  className="bi bi-grid"
                  style={{
                    color: selected === 'products' ? '#fff' : '#0d6efd',
                    // fontSize: '1.5rem',
                  }}
                />
              </ListItemIcon>
              <ListItemText>Products</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton disableRipple disableTouchRipple onClick={() => setSelected('customers')} selected={selected === 'customers'}>
              <ListItemIcon>
                <i
                  className="bi bi-person-circle"
                  style={{
                    color: selected === 'customers' ? '#fff' : '#0d6efd',
                    // fontSize: '1.5rem',
                  }}
                />
              </ListItemIcon>
              <ListItemText>Customers</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => setOpen(!open)} disableRipple disableTouchRipple>
              <ListItemIcon>
                <i
                  className={open ? 'bi bi-x' : 'bi bi-menu-button-wide'}
                  style={{
                    fontSize: '1rem',
                  }}
                />
              </ListItemIcon>
              <ListItemText>Close</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default SideBar;
