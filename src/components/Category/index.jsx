import React from 'react';
import { VStack, WrapItem, Box } from '@chakra-ui/react';

const Category = ({ image, name, items }) => {
  return (
    <VStack className="group ">
      <Box
        w={116}
        h={116}
        borderRadius={100}
        className=" border border-davyGrey flex  bg-transparent md:bg-milkyWhite text-tealBlue700 group-hover:text-tealBlue50 group-hover:bg-gradient-primary md:flex items-center justify-center"
      >
        {/* <img src={image} /> */}
        {image}
      </Box>
      <p className=" w-20 md:w-full  text-center text-sm md:text-base text-textColor2 group-hover:text-textColor1 font-Supreme font-extrabold uppercase ">
        {name}
      </p>
      <p className="text-tealBlue400 group-hover:text-tealBlue500 text-sm font-medium">
        {items} items
      </p>
    </VStack>
  );
};

export default Category;
