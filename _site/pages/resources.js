import { getResources } from '../lib/api';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';

const Resources = ({ resources }) => {
  return (
    <>
      <NextSeo title='Bitcoin Resources' />
      <Layout content={resources}>
        <strong>Start with Bitcoin</strong>
        <h1>Bitcoin Resources</h1>
        <p>
          Now that you know the basics, here’s some resources to get you going
          with Bitcoin.
        </p>
      </Layout>
    </>
  );
};

export default Resources;

export async function getStaticProps() {
  const resources = getResources(['number', 'slug', 'title', 'intro', 'type']);

  return {
    props: { resources },
  };
}
