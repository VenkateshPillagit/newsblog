import React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  LoginOutlined, LogoutOutlined, NewspaperOutlined,
} from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useTheme } from '@emotion/react';

function NavBar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const token = Cookies.get('Access_Token');
  return (
    <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, boxShadow: 'none' }}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '4rem',
        flexGrow: 1,
      }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          columnGap: 2,
          flexGrow: 1,
        }}
        >
          <Typography variant="h4">
            <NavLink to={token ? '/news' : '/signin'} style={{ listStyle: 'none', textDecoration: 'none', color: 'white' }}>
              YSI
            </NavLink>
          </Typography>
          <NavLink to={token ? '/news' : '/signin'} style={{ listStyle: 'none', textDecoration: 'none', color: 'white' }}>
            <NewspaperOutlined />
          </NavLink>
        </Box>
        {/* <MenuList
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // padding: '0.2rem',
            '& :hover': {
              // backgroundColor: 'red',
              // padding: '0.2rem',
            },
          }}
        >
          <MenuItem
            sx={{
              '& :hover': {
                backgroundColor: 'red',
              },
            }}
          >
            <Typography>
              Home
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography>
              News
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography>
              Sport
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography>
              Reel
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography>
              Worklife
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography>
              Travel
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography>
              Future
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography>
              Culture
            </Typography>
          </MenuItem>
        </MenuList> */}
        <List sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <ListItem>
            <NavLink to={token ? '/news' : '/signin'} style={{ listStyle: 'none', textDecoration: 'none', color: 'white' }}>
              News
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={token ? '/sports' : '/signin'} style={{ listStyle: 'none', textDecoration: 'none', color: 'white' }}>
              Sports
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={token ? '/international' : '/signin'} style={{ listStyle: 'none', textDecoration: 'none', color: 'white' }}>
              International
            </NavLink>
          </ListItem>
        </List>
        <IconButton color="inherit">
          {token
            ? (
              <LogoutOutlined onClick={() => {
                Cookies.remove('Access_Token');
                navigate('/signin');
              }}
              />
            )
            : <LoginOutlined />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
