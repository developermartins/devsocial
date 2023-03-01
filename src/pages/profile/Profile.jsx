import './Profile.scss';

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/Posts/Posts";

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUser } from '../../api/user';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Profile = () => {

  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split('/')[2]);

  const { isLoading, error, data } = useQuery(['user'], () => (
    getUser(userId)
  ));

  const { data: relationshipData } = useQuery(['relationship'], () => (
    getUser(userId)
  ));

  const handleFollow = () => {

  };

  return (
    <section className='profile'>
     { isLoading ? "Loading" : 
     <>
        <div className="images">
          <img 
            src={ data?.cover_pic }
            alt="cover"
            className='cover'
          />
          <img
            src={ data?.profile_pic }
            alt="profile picture"
            className='profilePic'
          />
        </div>
        <div className="profile-container">
          <div className="user-info">
            <div className="left">
                <a href="http://facebook.com">
                  <FacebookTwoToneIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <InstagramIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <TwitterIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <LinkedInIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <PinterestIcon fontSize="large" />
                </a>
            </div>
            <div className="center">
              <span>{ data?.name }</span>
              <div className="info">
                <div className="item">
                  <PlaceIcon />
                  <span>{ data?.city || '' }</span>
                </div>
                <div className="item">
                  <LanguageIcon />
                  <span>{ data?.website || '' }</span>
                </div>
              </div>
                { userId === currentUser.id ? (
                  <button>Update</button>
                ) : (
                  <button onClick={ handleFollow }>Follow</button>
                )}
            </div>
            <div className="right">
              <EmailOutlinedIcon />
              <MoreVertIcon />
            </div>
          </div>
          <Posts />
        </div>
      </> 
      }
    </section>
  );
};

export default Profile;
