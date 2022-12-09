import React from 'react';
import starStroke from 'assets/icons/starStroke.svg';
import star from 'assets/icons/star.svg';
import { Flex, Image } from '@chakra-ui/react';

const ReviewStar = ({ stars, reviews, size, number }) => {
  return (
    <Flex
      gap={5}
      className="items-center text-base font-normal text-tealBlue600"
    >
      {stars?.map((item, index) => {
        return (
          <Image
            className={size == 'small' ? ' h-3 w-3' : ''}
            key={index}
            src={index >= reviews ? starStroke : star}
          />
        );
      })}
      {number}
    </Flex>
  );
};

export default ReviewStar;
