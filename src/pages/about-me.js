import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';

const AboutMePage = () => {
  return (
    <Layout>
      <h1>Malcolm Kee</h1>
      <ul>
        <li>Full-Snack Developer</li>
        <li>KL, Malaysia</li>
      </ul>
      {/* highlight-next-line */}
      <Link to="/">Home</Link>
    </Layout>
  );
};

export default AboutMePage;
