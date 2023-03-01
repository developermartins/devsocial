import Stories from '../../components/stories/Stories';
import Posts from '../../components/Posts/Posts';
import '../home/Home.scss';
import Share from '../../components/Share/Share';

const Home = () => {
  return (
    <section className="home">
      <Stories />
      <Share />
      <Posts />
    </section>
  );
};

export default Home;
