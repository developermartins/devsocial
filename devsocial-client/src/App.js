import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from 'scenes/homePage';
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';

const App = () => {
  return (
    <section className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ LoginPage } />
          <Route path='/home' element={ HomePage } />
          <Route path='/profile/:useId' element={ ProfilePage } />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App