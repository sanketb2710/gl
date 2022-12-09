import { Box } from '@chakra-ui/react';
import RecentlyUsedCard from 'components/RecentlyUsedCard';
import React from 'react';

const RecentlyUsedSection = () => {
  return (
    <Box>
      <p className=" text-base font-bold text-tealBlue600">Recently Used</p>
      <RecentlyUsedCard />
    </Box>
  );
};

export default RecentlyUsedSection;
