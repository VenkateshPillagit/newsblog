import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from '@mui/material';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import theme from './theme/theme';

const clientID = '443092135820-1houq8vav8j0cl6rso6tiit3312lcoi1.apps.googleusercontent.com';
ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <GoogleOAuthProvider clientId={clientID}>
    <React.StrictMode>
      {console.log(window.location.origin)}
      <Auth0Provider
        domain="dev-p78ss9kh.us.auth0.com"
        clientId="CeLc1pb9lyLnZwULD0pWlUzD1D3CWUnn"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Auth0Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root'),
);
