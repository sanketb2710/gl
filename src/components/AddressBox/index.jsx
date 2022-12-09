import { Box } from '@chakra-ui/react';
import React from 'react';

const AddressBox = ({ title, type, content }) => {
  return (
    <Box className="mt-6 border-b-[1px] border-tealBlue100 pb-6">
      <p className=" text-tealBlue800 uppercase text-base font-extrabold">
        {title}
      </p>
      <Box className="flex justify-between mt-2">
        <Box>
          {type == 'method' ? (
            <p className=" text-base text-tealBlue500 font-bold">
              Standard shipping
            </p>
          ) : (
            ''
          )}
          <p className=" text-base text-tealBlue500 font-normal">{content}</p>
        </Box>
        <Box className=" rounded-lg uppercase text-center py-3 text-tealBlue800 text-base font-semibold border-[1px] border-tealBlue100 w-full max-w-[180px]">
          Change
        </Box>
      </Box>
    </Box>
  );
};

export default AddressBox;
