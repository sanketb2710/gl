import { Box } from '@chakra-ui/react';
import CheckoutSection from 'components/CheckoutSection';
import PaymentSection from 'components/PaymentSection';
import RecentlyUsedSection from 'components/RecentlyUsedSection';
import UserCartInfo from 'components/UserCartInfo';
import React from 'react';

const CartAddressComponent = () => {
  return (
    <Box className="">
      <Box className=" pl-20 mt-10 w-full max-w-[737px]">
        <UserCartInfo type="address" />
        <CheckoutSection />
        <PaymentSection />
        <RecentlyUsedSection />
      </Box>
    </Box>
  );
};

export default CartAddressComponent;
