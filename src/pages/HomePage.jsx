import React from 'react';
import { Box } from '@chakra-ui/react';
import Heading from '../components/Heading';
import Categories from '../components/Categories';
import Testimonial from 'components/Testiomial';
import BannerSection from 'components/BannerSection';
import AdSection from 'components/AdSection';
import Layout from 'components/Layout';
import FooterInfo from 'components/FooterInfo';

const HomePage = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Heading />
      <Layout>
        <BannerSection />
        <Categories />
        <AdSection />
        <Testimonial />
        <FooterInfo />
      </Layout>
    </Box>
  );
};

export default HomePage;
