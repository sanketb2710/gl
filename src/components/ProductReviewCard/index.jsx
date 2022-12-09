import { Flex, Box } from '@chakra-ui/react';
import ReviewStar from 'components/atoms/ReviewStar';
import React from 'react';

const ProductReviewCard = ({ head1, text2, reviewPerson, date }) => {
  return (
    <Box className="w-[428px] px-5 py-5">
      <p className=" text-lg font-medium text-[#1C2B2E] pb-2">{head1}</p>
      <ReviewStar reviews={5} stars={[1, 2, 3, 4, 5]} />
      <p className="text-tealBlue600 font-normal text-sm  mt-[18.5px]">
        {text2}
      </p>
      <Flex className="text-lightBlue text-sm font-normal mt-4">
        <p className=" border-r-lightBlue border-r-[1px] px-1">
          {reviewPerson}
        </p>
        <p className="px-1">Posted on {date}</p>
      </Flex>
    </Box>
  );
};

export default ProductReviewCard;
