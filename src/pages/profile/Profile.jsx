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
import Update from '../../components/update/Update';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUser } from '../../api/user';
import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { addRelationship, deleteRelationship, getRelationships } from '../../api/relationships';

const Profile = () => {

  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split('/')[2]);

  const { isLoading, error, data } = useQuery(['user'], () => (
    getUser(userId)
  ));

  const { isLoading: relationshipLoading, data: relationshipData } = useQuery(['relationship'], () => (
    getRelationships(userId)
  ));

    const queryClient = new useQueryClient();

    const mutation = useMutation((following) => {
      if (following) return deleteRelationship(userId);
      return addRelationship(userId);
      
    }, {
       onSuccess: () => {
         // Invalidate and refetch
         queryClient.invalidateQueries(['relationship'])
       },
    });
  
    const handleFollow = (e) => {
      mutation.mutate(relationshipData.includes(currentUser.id))
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
                { relationshipLoading ? "Loading" : userId === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(true)}>Update</button>
                ) : (
                  <button onClick={ handleFollow }>
                    { 
                      relationshipData.includes(currentUser.id) ? "Following" : "Follow"
                    }
                  </button>
                )}
            </div>
            <div className="right">
              <EmailOutlinedIcon />
              <MoreVertIcon />
            </div>
          </div>
          <Posts userId={userId} />
        </div>
      </> 
      }
      { openUpdate && <Update setOpenUpdate={ setOpenUpdate } /> }
    </section>
  );
};

export default Profile;
