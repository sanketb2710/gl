import { Image, Flex } from '@chakra-ui/react';
import React from 'react';

const FooterInfoBox = ({ image, head1, text }) => {
  return (
    <Flex
      //   justifyContent="space-between"
      className="pl-2 pr-2  md:py-0 md:pr-10 border-r-[0px] border-b-[0px] md:border-b-[0px] md:border-r-[1px] border-tealBlue100 flex-col items-center md:flex-row  justify-between gap-1 md:items-start  "
    >
      <Image src={image} />
      <Flex className="items-center flex-col  md:items-baseline mt-2 md:mt-0 md:ml-3">
        <h3 className=" uppercase text-lg font-extrabold text-tealBlue700">
          {head1}
        </h3>
        <p className=" text-base font-normal text-tealBlue500 mt-2 md:mt-0">
          {text}
        </p>
      </Flex>
      <hr className=" w-16 mt-6 mb-6 md:hidden text-tealBlue100 " />
    </Flex>
  );
};

export default FooterInfoBox;
