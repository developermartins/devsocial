import React from 'react';
import Post from '../Post/Post';
import './Posts.scss';

import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../../api/posts';

const Posts = ({ userId }) => {

  const { isLoading, error, data } = useQuery(['posts'], () => (
    getPosts(userId)
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