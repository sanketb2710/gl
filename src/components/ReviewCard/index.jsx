import {
  Card,
  CardBody,
  CardFooter,
  // CardHeader,
  // Divider,
  Flex,
  Image,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import profile from 'assets/images/profile.png';
import ReviewStar from 'components/atoms/ReviewStar';

const ReviewCard = () => {
  return (
    <Card className=" w-397px md:w-28rem  px-5 rounded-2xl py-7 bg-white embla__slide__img ">
      <CardBody>
        <ReviewStar stars={[1, 2, 3, 4, 5]} reviews={4} />
        <p className="text-start mt-4 mb-4 text-textColor2 font-normal text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </CardBody>
      <CardFooter className=" border-t border-border pt-4">
        <Image src={profile} />
        <VStack alignItems="baseline" className=" pl-5">
          <p className="text-textColor2 font-semibold text-base font-Ubuntu">
            Name
          </p>
          <p className="text-tealBlue400 text-sm font-normal font-Ubuntu">
            07/02/2022
          </p>
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
