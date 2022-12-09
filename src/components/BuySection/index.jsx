import { Box, Button, Flex } from '@chakra-ui/react';
import OfferTime from 'components/OfferTime';

import React from 'react';

const BuySection = ({ AddToCart }) => {
  return (
    <Box className=" pt-6">
      <Box className="items-center justify-between hidden mobile_md:flex ">
        <h1 className=" text-tealBlue900 font-medium text-base">
          Available until July 22
        </h1>
        <OfferTime number={10} text="Hours" />
        <OfferTime number={24} text="Min" />
        <OfferTime number={45} text="Sec" />
      </Box>
      <Box
        onClick={AddToCart}
        className=" hidden mobile_md:flex cursor-pointer justify-center max-w-[411px] w-full bg-tealBlue900 rounded-lg  mb-4 mt-5 py-3"
      >
        <p className=" text-base font-extrabold text-milkyWhite2  uppercase tracking-widesm">
          Add to cart
        </p>
      </Box>
      <Flex className="w-full justify-between">
        <Box className="mobile_md:hidden flex cursor-pointer justify-center max-w-[190px] w-full bg-tealBlue900 rounded-lg  mb-4 mt-5 py-3">
          <p className=" cursor-pointer text-base font-extrabold text-milkyWhite2 uppercase tracking-widesm">
            Add to cart
          </p>
        </Box>
        <Button className="max-w-[190px] mobile_md:max-w-[302px] w-full border-tealBlue300 border-[1px] mb-4 mobile_md:mb-0 mt-5 mobile_md:mt-0 py-3 rounded-lg">
          <p className="text-base font-extrabold text-tealBlue900 uppercase tracking-widesm">
            Buy Now
          </p>
        </Button>
        <Box className="max-w-[85px]  w-full border-tealBlue300 border-[1px] py-[15px] rounded-lg hidden mobile_md:flex justify-center">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.34255 3.77795C1.5687 3.23198 1.90017 2.7359 2.31804 2.31804C2.7359 1.90017 3.23198 1.5687 3.77795 1.34255C4.32392 1.1164 4.90909 1 5.50004 1C6.09099 1 6.67616 1.1164 7.22213 1.34255C7.7681 1.5687 8.26417 1.90017 8.68204 2.31804L10 3.63604L11.318 2.31804C12.162 1.47412 13.3066 1.00001 14.5 1.00001C15.6935 1.00001 16.8381 1.47412 17.682 2.31804C18.526 3.16196 19.0001 4.30656 19.0001 5.50004C19.0001 6.69352 18.526 7.83812 17.682 8.68204L10 16.364L2.31804 8.68204C1.90017 8.26417 1.5687 7.7681 1.34255 7.22213C1.1164 6.67616 1 6.09099 1 5.50004C1 4.90909 1.1164 4.32392 1.34255 3.77795Z"
              stroke="#121926"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Box>
      </Flex>
    </Box>
  );
};

export default BuySection;
