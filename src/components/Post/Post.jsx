import React, { useState } from 'react';
import './Post.scss';

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const Post = ({ post }) => {

  const [openComments, setOpenComments] = useState(false);

  const liked = false;

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
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{ post.post_content }</p>
          <img src={ post.img } alt="" />
        </div>
        <div className="info">
          <div className="item">
            {  
              liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />
            }
            12 likes
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
          { openComments && <Comments /> }
      </div>
    </section>
  );
};

export default Post;
