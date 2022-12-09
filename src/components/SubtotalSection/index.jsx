import React from 'react';
import { Box } from '@chakra-ui/react';
const SubtotalSection = () => {
  return (
    <div className="mb-10">
      <Box className="text-lg text-tealBlue600 font-normal flex justify-between">
        <p>Sub Total</p>
        <p className=" text-tealBlue900">$53.98</p>
      </Box>
      <Box className="text-lg text-tealBlue600 font-normal flex justify-between">
        <p>Discount</p>
        <p className=" text-tealBlue900">$8.26</p>
      </Box>
    </div>
  );
};

export default SubtotalSection;
