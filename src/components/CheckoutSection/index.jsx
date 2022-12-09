import { Box } from '@chakra-ui/react';
import AddressBox from 'components/AddressBox';
import CustomTimer from 'components/CustomTimer';
import React from 'react';

const addressData = [
  {
    type: 'address',
    title: 'Shipping Address',
    content:
      'Henry Ford, 1026 Lincoln Rd, Wall Street, Loop area. 33139 United States. Phone number: (303) 538-9345 ',
  },
  {
    type: 'address',
    title: 'Billing Address',
    content:
      'Henry Ford, 1026 Lincoln Rd, Wall Street, Loop area. 33139 United States. Phone number: (303) 538-9345 ',
  },
  {
    type: 'method',
    title: 'shipping method',
    content: 'Estimated delivery ( 7 - 10 days ) Tuesday 7th September',
  },
];
const CheckoutSection = () => {
  return (
    <Box className=" mt-10">
      <Box className=" flex justify-between">
        <p className=" text-2xl text-tealBlue900 font-extrabold ">Checkout</p>
        <CustomTimer />
      </Box>
      {addressData.map((item, index) => {
        return (
          <AddressBox
            key={index}
            title={item.title}
            type={item.type}
            content={item.content}
          />
        );
      })}

      {/* <AddressBox /> */}
    </Box>
  );
};

export default CheckoutSection;
