import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemifyContext } from '../../context/themifyContext';

import './Navbar.scss';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {

  const { toggleTheme, theme } = useContext(ThemifyContext);

  return (
    <nav className='navbar'>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>DevSocial</span>
        </Link>
        <HomeOutlinedIcon />
        { 
          theme
          ?
          <WbSunnyOutlinedIcon onClick={ toggleTheme } /> 
          : 
          <DarkModeOutlinedIcon onClick={ toggleTheme } />
        }
        <GridViewOutlinedIcon />
        <div className='search'>
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search...' />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className='user'>
          <img src="https://avatars.githubusercontent.com/u/97063329?v=4" alt="User photo" />
          <span>DevMarts</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
