import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const SizeSelection = () => {
  const sizes = ['s', 'm', 'l', 'xl', 'xxl', '3xl', '4xl', '5xl'];
  return (
    <Box className="pt-5">
      <Flex className="justify-between pb-5">
        <h1 className=" text-tealBlue900 text-base font-extrabold">Sizes</h1>
        <h1 className=" text-aquaBlue600 text-sm font-bold">Size Chart</h1>
      </Flex>
      <Flex className=" gap-5 flex-wrap">
        {sizes.map((item, index) => {
          return (
            <Box
              key={index}
              className="border-davyGrey cursor-pointer border-[1px] w-[49px] h-[49px] flex justify-center items-center rounded-full"
            >
              <p className=" text-base font-medium uppercase">{item}</p>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default SizeSelection;
