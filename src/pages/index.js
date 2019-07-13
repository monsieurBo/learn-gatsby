import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';

const HomePage = () => {
  return (
    <Layout>
      <h1>Welcome to Malcolm Kee's Website</h1>
      <p>crafted with tears and love.</p>
      {/* highlight-next-line */}
      <Link to="/about-me">About</Link>
    </Layout>
  );
};

export default HomePage;
