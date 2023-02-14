import React from 'react';
import Post from '../Post/Post';
import './Posts.scss';

import {
  useQuery,
} from '@tanstack/react-query'

const Posts = () => {


  const { isLoading, error, data } = useQuery(['posts'], () => )

     const posts = [
          {
            id: 1,
            name: "John Doe",
            userId: 1,
            profilePic:
              "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
          {
            id: 2,
            name: "Jane Doe",
            userId: 2,
            profilePic:
              "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
          },
     ];

  return (
    <section className='posts'>
          { posts.map((post) => (
               <div className='post'>
                    <Post post={ post } key={ post.id } />
               </div>
          )) }
    </section>
  );
};

export default Posts;