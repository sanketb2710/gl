import { Box, Flex } from '@chakra-ui/react';
import OfferPrice from 'components/atoms/OfferPrice';
import ReviewStar from 'components/atoms/ReviewStar';
import ProductDetailSlider from 'components/ProductDetailSlider';
import ProductMobileSlider from 'components/ProductMobileSlider';
import img1 from 'assets/images/img1.png';
import React from 'react';

const ProductSelection = () => {
  return (
    <Box>
      <h2 className=" font-extrabold text-tealBlue900 text-2xl">
        Palmdale come back to me{' '}
      </h2>
      <Flex className=" justify-between align-baseline">
        <OfferPrice price="17.65" offerPrice="7.65" />
        <ReviewStar
          reviews={4}
          stars={[1, 2, 3, 4, 5]}
          size="small"
          number={3}
        />
      </Flex>

      <ProductMobileSlider image={img1} />
      <ProductDetailSlider />
    </Box>
  );
};

export default ProductSelection;
