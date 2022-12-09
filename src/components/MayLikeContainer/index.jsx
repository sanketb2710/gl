import React from 'react';
import ProductCard from 'components/ProductCard';
import { Box, Flex } from '@chakra-ui/react';

const MayLikeContainer = () => {
  return (
    <Box className="bg-tealBlue50 -mx-4 mobile_md:mx-0">
      <h3 className="uppercase text-tealBlue900 text-2xl font-extrabold mb-6 pt-10 pl-4 mobile_md:pl-0">
        You may also like
      </h3>
      <Flex className="gap-0 mobile_md:gap-4 flex-wrap">
        {[1, 2, 3].map(() => (
          <ProductCard />
        ))}
      </Flex>
    </Box>
  );
};

export default MayLikeContainer;
