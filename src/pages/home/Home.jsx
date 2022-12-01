import React from 'react';
import Stories from '../../components/stories/Stories';
import Post from '../../components/Post/Post';
import '../home/Home.scss';

const Home = () => {
  return (
    <section className="home">
      <Stories />
      <Post />
    </section>
  );
};

export default Home;
