import { Box } from '@chakra-ui/react';
import React from 'react';

const CouponCodeCard = ({ available }) => {
  return (
    <Box className="w-full bg-white rounded-lg p-4 my-4">
      <Box className="flex justify-between">
        <p
          className={`font-extrabold text-base ${
            available ? 'text-tealBlue900' : 'text-tealBlue400'
          }`}
        >
          FLAT25
        </p>
        <p
          className={` font-medium text-base ${
            available ? 'text-aquaBlue600' : 'text-tealBlue400'
          }`}
        >
          Apply
        </p>
      </Box>

      <p
        className={` font-medium text-base ${
          available ? 'text-tealBlue500' : 'text-[#0BA95F]'
        }`}
      >
        Get upto 25% off on your first order
      </p>
    </Box>
  );
};

export default CouponCodeCard;
