import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';

import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/profilePage';

const App = () => {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <section className='app'>
      <BrowserRouter>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <Routes>
            <Route path='/' element={ <LoginPage /> } />
            <Route path='/home' element={ <HomePage /> } />
            <Route path='/profile/:useId' element={ <ProfilePage /> } />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </section>
  );
};

export default App;
