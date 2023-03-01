import React, { useContext } from 'react';
import Post from '../Post/Post';
import './Posts.scss';

import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../../api/posts';
import { AuthContext } from '../../context/authContext';

const Posts = ({ userId }) => {

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(['posts'], () => (
    !userId ? getPosts(currentUser.id) : getPosts(userId)
  ))

  return (
    <section className='posts'>
          { error 
          ? "Something went wrong!"
          : isLoading
          ? "Loading"
          : data.map((post) => (
               <div className='post'>
                    <Post post={ post } key={ post.id } />
               </div>
          )) }
    </section>
  );
};

export default Posts;