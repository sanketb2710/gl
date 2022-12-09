import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import UserLogin from '../../assets/icons/UserLogin.svg';

const UserCartInfo = ({ type }) => {
  return (
    <div
      className={`flex px-4 pb-3 pt-2 ${
        type == 'address' ? ' bg-aqualBlue25' : 'mobile:hidden'
      }`}
    >
      <Image src={UserLogin} />
      <Box className=" mx-2">
        <p className=" font-normal text-base text-tealBlue700">
          Hey <span className=" font-bold">Lisa</span>,{' '}
          {type == 'address'
            ? 'You are almost there'
            : 'Your cart value is $55.65'}
        </p>

        {type == 'address' ? (
          ''
        ) : (
          <p className=" font-bold text-base text-aquaBlue700">
            Proceed to Checkout
          </p>
        )}
      </Box>
    </div>
  );
};

export default UserCartInfo;
