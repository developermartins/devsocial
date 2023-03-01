import React, { useContext, useState } from 'react';
import './Post.scss';

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from '../Comments/Comments';
import moment from 'moment';

import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addLike, getLikes, removeLike } from '../../api/likes';
import { AuthContext } from '../../context/authContext';

const Post = ({ post }) => {

  const [openComments, setOpenComments] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(['likes', post.id], () => (
    getLikes(post.id)
  ));

  const queryClient = new useQueryClient();

  const mutation = useMutation((liked) => {
    if (liked) return removeLike(post.id);
    return addLike(post.id)
    
  }, {
     onSuccess: () => {
       // Invalidate and refetch
       queryClient.invalidateQueries(['likes'])
     },
  });

  const handleLike = (e) => {
    mutation.mutate(data.includes(currentUser.id))
  };

  return (
    <section className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={ post.img } alt="" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                <span className="name">{ post.name }</span>
              </Link>
              <span className="date">{ moment(post.create_time).fromNow() }</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{ post.post_content }</p>
          <img src={ "./upload/" + post.img } alt="" />
        </div>
        <div className="info">
          <div className="item">
            {
              isLoading ? "Loading" : data?.includes(currentUser.id) ? (
                <FavoriteOutlinedIcon style={{ color: "red" }} onClick={ handleLike } />
              ) : (
                <FavoriteBorderOutlinedIcon onClick={ handleLike } />
              )
            }
            { data?.length } likes
          </div>
          <div className="item" onClick={ () => setOpenComments(!openComments) }>
            <TextsmsOutlinedIcon />
            12 comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
          { openComments && <Comments postId={ post.id } /> }
      </div>
    </section>
  );
};

export default Post;
