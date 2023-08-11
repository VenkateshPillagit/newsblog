import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      // dark: '#050c15',
      // light: '#eaf1fa',
      main: '#0d6efd',
    },
    // secondary: {
    //   main: '#7d8db6',
    // },
    // success: {
    //   main: '#33B469',
    // },
    // warning: {
    //   main: '#E59E33',
    // },
    // info: {
    //   main: '#2F80ED',
    // },
    // error: {
    //   main: '#E51414',
    // },
  },
  // MuiListItemButton-gutters css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root
  components: {
    // MuiDrawer: {
    //   styleOverrides: {
    //     root: {
    //       '&.css-12i7wg6-MuiPaper-root-MuiDrawer-paper': {
    //         width: '240px',
    //       },
    //     },
    //   },
    // },
    // MuiListItemIcon: {
    //   styleOverrides: {
    //     root: {
    //       minWidth: '56px',
    //     },
    //   },
    // },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          background: '#fff',
          border: '1px solid #1A417675',
          '&:hover': {
            background: 'none',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#0d6efd',
            color: '#fff',
          },
          '&.Mui-selected': {
            backgroundColor: '#0d6efd',
            color: '#fff',
          },
          // when area selected below styles will applied
          // '&[aria-selected=true]': {
          //   backgroundColor: 'red',
          // },

          // ':hover': {
          //   backgroundColor: '#fff',
          //   color: 'black',
          // },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          // color: 'red',
        },
      },
    },
  },
});

export default theme;
