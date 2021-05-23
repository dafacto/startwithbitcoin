import { getReasons } from '../lib/api';
import Layout from '../components/Layout';

const Home = ({ reasons }) => {
  return (
    <>
      <Layout content={reasons}>
        <strong>Start with Bitcoin</strong>
        <h1>A Guide for Beginners</h1>
        <p>
          If you’re new to Bitcoin and curious to learn more, you’ve come to the
          right place. In just a few quick lessons, you’ll learn all the basics.
        </p>
      </Layout>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const reasons = getReasons(['number', 'slug', 'title', 'intro']);

  return {
    props: { reasons },
  };
}
