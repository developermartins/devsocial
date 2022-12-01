import React from 'react';
import Stories from '../../components/stories/Stories';
import Posts from '../../components/Posts/Posts';
import '../home/Home.scss';

const Home = () => {
  return (
    <section className="home">
      <Stories />
      <Posts />
    </section>
  );
};

export default Home;
